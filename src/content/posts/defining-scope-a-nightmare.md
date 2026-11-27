---
title: "Defining Scope: A Nightmare"
date: 2026-11-26
summary: Define scope or drown in the Bottomless Pit of Scope Creep.
tags:
  - c
  - networking
series: HTTP server
draft: false
---

It's November 15th, 7:51 pm. You sit, staring at your notes and the screen, staring blankly.

"F\*ck," you say to yourself.

"Thought I'd be done with URI parsing today."

![](/images/journal/defining-scope/nov-15-img-1.webp)

![](/images/journal/defining-scope/nov-15-img-2.webp)

I stared back and forth between the RFC and my notes. I had been working around 6-7 hours already. Stavros Niarchos Foundation Library in Midtown closes early on Sundays, and so to lengthen my work hours I had decided to relocate to a Starbucks. But I was out of it at this point.

I had started this project with the goal of developing as a systems developer, thinking, "parsing'll be a breeze, I'll be `send()`ing and `recv()`ing in no time." Thought I'd be debugging processes and `pthread`s functionality, the part of the project that actually scared me when I started.

But a month in, I was still working on my HTTP request parser.

The issue I ran into: I hadn't defined a clear project scope.

When I started the project, I set the vague goalpost of just implementing HTTP/1.1 as defined by RFC 9112. Setting that as my scope, without foreknowledge regarding what said implementation would require, was a mistake. I assumed the implementation would be a walk in the park, considering how straightforward RFCs 9110 and 9112 came across; however, ease of comprehension doesn't equate to ease of implementation.

Due to this project, I've learned a new paradigm to implement the parsing mechanism: Finite state machines (FSMs).

My current implementation of that paradigm involves the existence of many states to maintain minute detail as necessary between function calls.

E.g., the finite state machine for the HTTP request method:

![](/images/journal/defining-scope/http-method-fsm-diagram.webp)

involves the following states:

```C
enum http_method_state {
METHOD_STATE_START,

// case GET:
READ_G_EXPECTING_E_IN_GET,
READ_E_EXPECTING_T_IN_GET,
READ_T_EXPECTING_SPACE_AFTER_GET,

// case HEAD:
READ_H_EXPECTING_E_IN_HEAD,
READ_E_EXPECTING_A_IN_HEAD,
READ_A_EXPECTING_D_IN_HEAD,
READ_D_EXPECTING_SPACE_AFTER_HEAD,

// case POST || PUT:
READ_P_EXPECTING_EITHER_O_OR_U_OR_A,

// case POST:
READ_O_EXPECTING_S_IN_POST,
READ_S_EXPECTING_T_IN_POST,
READ_T_EXPECTING_SPACE_AFTER_POST,

// case PUT:
READ_U_EXPECTING_T_IN_PUT,
READ_T_EXPECTING_SPACE_AFTER_PUT,

// case PATCH:
READ_A_EXPECTING_T_IN_PATCH,
READ_T_EXPECTING_C_IN_PATCH,
READ_C_EXPECTING_H_IN_PATCH,
READ_H_EXPECTING_SPACE_AFTER_PATCH,

/**********
insert 27 more lines of states
**********/
};
```

That's 45 total possible states for text that is, at most, 7 characters long and contains solely alphabetical characters. And there's only one type of method. The `host` part of an `authority` in an `absolute-URI` comes in 4 distinct types [RFC 3986](https://www.rfc-editor.org/info/rfc3986/):

```ABNF
host       = IP-literal / IPv4address / reg-name

IP-literal = "[" ( IPv6address / IPvFuture  ) "]"

IPvFuture  = "v" 1*HEXDIG "." 1*( unreserved / sub-delims / ":" )
```

So the recognition of the start of a type and then the actual states required to ensure compliance with that type definition would easily run the number of states well past 100[^1].

With a different set of circumstances, I'd love the opportunity to take my sweet time perfecting the validation of IPvFuture. The goal, however, is much more specific than literally implementing every functionality required for a 100% compliant HTTP/1.1 server. I want to get requests, understand them, build responses, and get them back to clients as fast and efficiently as possible with the goal of gaining a better understanding of what a computer has to do to _be_ a server.

So, I'm going to (with some direction from AI) define a project scope detailed enough that I can personally write the program, while not being held up by implementation details that I could easily have Claude handle in a 30-minute session 💔.

[^1]: Note: I could be wrong here. I am assuming this number given my current implementation of FSMs, and if there's a better approach or something I'm missing, please let me know through the contact section or a social media channel!
