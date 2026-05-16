---
title: 'The Interactive Minds of the Open Machine'
slug: 'interactive-minds-comms'
matter: 'transmissions'
author: 'Open Machine'
excerpt: 'Some of our colleagues and readers had been asking how to get more involved with the Open Machine. We explored what they were desiring and two clear modes emerged.'
date: '2026-03-24T00:00:00.000Z'
imagePath: '/assets/transmissions/mind.png'
---
Some of our colleagues and readers had been asking how to get more involved with the [Open Machine](https://theopenmachine.net). We explored what they were desiring and two clear modes emerged. Some wanted to follow the cutting edge of our work: keeping up with research and concepts, media and events as they developed. Others wanted to be more directly involved: engaging with the research substrate, collaborating on media and event production, and contributing directly to expand the knowledge of the Open Machine.

With this feedback in mind, we set out to fortify our infrastructure so that it may serve both modes. The AI era had opened a new possibility for a research studio like ours: the accumulated intelligence of years of inquiry and knowledge work — our published works, the reference material and concepts that fuel us, even works-in-progress — can now be made structurally legible, not just to human readers, but to AI as a collaborator and interlocutor. We wanted to experiment to leverage and integrate modern AI capacities throughout our assemblage of knowledge production.

The result is what we call _The Interactive Minds of the Open Machine_: two linked directories of markdown files — one private, one public — that together constitute the living knowledge base of the studio. Not an archive, not a wiki, not a documentation site. Something more like an externalized, traversable field of thought: structured to remain useful whether you're a contributor working inside, or a curious reader querying it through a [chat interface on our public website](https://mind.theopenmachine.net).

We publish this document both to explain how the minds work and why we built them this way, and to open up the structure as something others can replicate, fork, and adapt.

[Chat directly](https://mind.theopenmachine.net) with our knowledge base to gather insights in your own frame.

Use our [Spec](https://github.com/oovg/om-quartz/blob/v4/chat/BUILD.md) to build a RAG Chat for your own Quartz site.

---
## Two Minds

The knowledge base of the Open Machine is organized into two related but distinct directories: the **Inner Mind** and the **Outer Mind**.

The split reflects the dual nature of a research studio that works in public but also needs a private operational space: a place to hold things that are unfinished, contested, or simply not yet ready for the canon. It also reflects our commitment to **open protocolization**: the principle that practical insights should be documented and made available rather than enclosed within proprietary systems. The Outer Mind is where that commitment finds its form.

---

## Details of The Outer Mind

![Inner Mind Vault](OM_InteractiveMinds-home.png)

The Outer Mind is the public face of the Open Machine's knowledge base. Where the Inner Mind is operational, the Outer Mind is canonical. It holds what we are willing to stand behind: the work that has been curated and composed enough to share widely.

It is published as a static website, and though it is navigable as a standard wiki-style site, it is optimized for something else: direct conversation with the knowledge base through an embedded AI chat interface. We want readers to be able to ask questions, pursue curiosities, and receive responses grounded in our actual corpus. Not a generic language model response, but one rooted in the particular conceptual territory the Open Machine occupies. We have an elaborate system prompt to help the chat bot understand where its knowledge comes from and what its role is.

The Outer Mind currently holds:

- **About** - General information about the Open Machine
- **Concepts** - Working definitions and explorations of the ideas that shape our perspective, from immanence and autopoiesis to extitutions and the protocol underground
- **Media** - All published media: zines, essays, posters, and web content, all licensed Creative Commons
- **Events** - Descriptions and learnings from completed and active events
- **Frameworks** - Published frameworks for organizational design and coordination
- **Specs** - Open specification documents that allow our infrastructure and learnings to be replicated and adapted

On our next pass, we are extending the Outer Mind to include active and upcoming projects across media, events, frameworks, and specs: a forward-facing view of our work for those who want to contribute or simply want to know what's on the horizon. We are also developing richer data visualizations and lineage graphs to show the transhistorical nature of our inquiries into immanence and technology: not just what we think now, but where it comes from and where it might be going.

### The Chat Interface

![Inner Mind Vault](OM_InteractiveMinds-chat.png)

The chat interface embedded in the Outer Mind is trained on the Open Machine as an entity and grounded in the full context of our corpus: concepts, references, media, frameworks, and specs. It uses **Voyage AI** for semantic retrieval and **Claude Haiku** for chat completion. The effect is a conversation partner that can answer questions about our work, surface relevant concepts, and help readers orient within what can be a dense field of inquiry. It is grounded in our actual work rather than the confabulating authority of a general-purpose language model operating outside its corpus.

The full specification for building this kind of chat interface into a Quartz site is published as an open spec, so that others can build it for their own knowledge bases. We have a commitment to documenting not just what we think but how we work; spec-first is part of how we operationalize open protocolization. 

[Download the Spec to build an AI Chat Bot into a Quartz site](https://github.com/oovg/om-quartz/blob/v4/chat/BUILD.md)

---

## Details of The Inner Mind

![Inner Mind Vault](OM_InteractiveMinds-vault.png)

The Inner Mind is the base of operations for contributors to the Open Machine. It is a private, invite-only knowledge base that holds everything: the projects, the concepts, the research threads, the event records, the administrative notes, the published media, the technical specs, and the unresolved questions. It is designed to be navigable by both human contributors and AI agents.

The directory is structured around a numbered set of high-level folders, ordered to keep the most actively worked areas near the top:

- **Dashboard** - High-level context: descriptions of the Open Machine, its mission, values, and currently planned programme
- **Inbox** - First landing place for new documents, before triage
- **Concepts** - A living glossary of important concepts that shape our perspective
- **Projects** - Active works in progress, both internal and externally-facing
- **Media** - Published media outputs
- **Events** - Completed and active events
- **Frameworks** - Completed organizational and conceptual frameworks
- **Specs** - Completed specification documents, technical and non-technical
- **References** - Significant external material that informs our work
- **Meta** - Conventions, skills, and tools for maintaining the knowledge base

This flatness is deliberate. The goal is to reduce the depth of the folder hierarchy as much as possible, optimizing for AI traversal while keeping navigation intuitive for human contributors. When multiple documents belong to a single topic (the chapters of a published work, the files belonging to a specific project, etc) they are prefixed with the shared topic name rather than nested in a subfolder (e.g., *Ethereum Localism - Introduction*, *Ethereum Localism - Chapter One*).

### Conventions and Triage

The conventions that govern the Inner Mind are stored and periodically updated in a `conventions.md` file in the Meta directory. These conventions cover document structure, frontmatter properties, tag namespacing, and graph relationships. They exist to keep the knowledge base useful for AI traversal as well as human readability; they are themselves versioned and open to revision by contributors.

New content enters the Inner Mind through the **Inbox**. Raw notes, drafts, and incoming research land here first. As they are developed and their required properties filled in adequately, they graduate to their appropriate folder. We have a Claude skill for this, `/triage`, which scans the Inbox, compares each document's content and metadata against the conventions, and moves any files that are ready while listing what remains outstanding for those that aren't. With sufficient testing and validation, this kind of skill can be scheduled as an automated task: a daily or weekly triage event that keeps the knowledge base tidy without requiring manual triggers and oversight.

Tags are tightly namespaced, with `conventions.md` updated whenever a new tag is introduced. Nested tags (such as `media/zine` used alongside the general `media` tag) ensure the graph captures both specific and general relationships. The visual graph, whether rendered in Obsidian or any compatible tool, provides another means of traversal: a spatial, relational view of how concepts, projects, and references connect across the entire knowledge base.

### Working with the Inner Mind

Contributors write and edit markdown by hand or with AI assistance, add it to the knowledge base, and run skills using Claude CLI from the root of the vault. Running `claude` in the root directory gives contributors access to the full context of the Inner Mind as a research enhancement: a way of querying the shared context, exploring relationships between concepts, or working through a research problem with AI as a collaborator rather than a search engine. Markdown can also be written and interfaced through any code editor or AI coding agent, including VS Code and Cursor.

---

## The Technical Stack

The full stack behind the Interactive Minds is built from open-source or open-protocol components wherever possible:

[**Claude CLI** ](https://code.claude.com/docs/en/overview)-Running `claude` in the root directory of either vault provides localized AI context. The Inner Mind leverages this for internal research, knowledge management, and running skills like `/triage` for organization and taxonomization of documents.

**[Obsidian](https://obsidian.md/)** -The primary local interface for working with the markdown directories. Community plugins, including the Git plugin, make it easy to pull the latest changes from GitHub and commit and sync updates to the shared repository.

[**GitHub**](https://github.com/) -There are three repos in total. The Inner Mind is hosted as a private repository; the Outer Mind as two public ones. Contributors sync via git, and the public Outer Mind repository is the source of content that feeds into the Quartz repo. 

[**Quartz**](https://quartz.jzhao.xyz/) -A framework for publishing static websites from directories of markdown files. All navigation, search, and graph functionality on the Outer Mind website is built from Quartz.

[**Supabase**](https://supabase.com/) -Hosts the vectorized database. Edge functions vectorize the knowledge base for retrieval, enabling the chat interface to search semantically across the full corpus rather than relying on keyword matching.

[**Custom AI Chat Component**](https://github.com/oovg/om-quartz/blob/v4/chat/BUILD.md) -A custom component in the Quartz site that connects the chat interface to the vectorized database. Uses Voyage AI for semantic retrieval and Claude Haiku for chat completion. See the linked spec for how we built it, and for instructions on having your own agent build a chat bot for your Quartz site.

The foundation, as should be clear by now, is simply a directory of markdown files. By design, the substrate is maximally portable. Contributors can and do work with it through any markdown-compatible tool.

### Toward a More Sovereign Configuration

This setup emerged from a sprint, chasing the dopamine of a functional MVP while also responding to a real need: contributors and readers asking for access to the growing body of Open Machine inquiry. The current stack gets us there, but we are actively investigating configurations that are more local-first and privacy-preserving. Gitea or Forgejo could replace GitHub; Venice AI could replace cloud-side chat completion for enhanced privacy. The point is not to lock in any specific combination of services but to demonstrate a replicable structure that others can take, adapt, and improve upon. The markdown directory is the durable core. Everything else can be swapped based on your proclivities of security, privacy, and cost.

---

## Go Forth and Interact with Our  Minds

**The Public** - Explore the [Outer Mind of the Open Machine](https://mind.theopenmmachine.net). Query our knowledge base, trace our concepts, follow our work, and ask it anything.

https://mind.theopenmachine.net

**Contributors** - If you feel your work aligns with the [Open Machine](https://theopenmachine.net) and you're interested in contributing, reach out to us at theopenmachine@protonmail.com. We'll be publishing more detailed on-ramps shortly.
