---
module: react

level: 2

methods:
  - team
  - pair
  - solo

tags:
  - wip
---

# Component Tree

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

We've been working with [our very first React app](https://github.com/WeAreAcademy/mark-react-proj--meet-react), where we modified an existing component and defined our own!

Now, we're going to see how we can start working with multiple components and begin to assemble a component tree.

## Learning Outcomes

- Render a React component from within another
- Draw out the component tree

## Exercise 1: Installing and demoing

> 🎯 **Success criterion:** you can view the React web app on `localhost:3000`

Firstly, clone this repository to your local machine in some sensible place, for example:

```bash
cd ~/Development/Academy # or wherever you're organising everything
git clone https://github.com/WeAreAcademy/mark-react-proj--component-tree.git
```

Then, change into the new directory and install the files:

```bash
cd mark-react-proj--component-tree
yarn
```

Finally, run your new React app!

```bash
yarn start
```

The `start` script is configured such that the app will run by default on your local machine at `localhost:3000`, which should open up in your browser automatically (but which you can also navigate to).

## Exercise 2: Reading, understanding and documenting

> 🎯 **Success criterion:** a document which outlines how you think this React app works. You don't have to achieve a theory which explains 100%, but you should strive to explain as much as possible.

(N.B.: The _correctness_ of your theory is **much less important** than the _process_ of forming this document. [Forming a prediction, and then discovering it was wrong, is an effective way to learn](https://www.sciencedirect.com/science/article/abs/pii/S0959475217303468)!)

1. Take some time to read and digest the code
2. Google things that you don't understand
3. Experiment with changing things
4. Produce a narrative document

> ⚠️ For now, you will have to refresh `localhost:3000` when you make changes to see them take effect. _(Instructor note: CRA hot reload / fast refresh seems not to be able to watch code inside `index.tsx`.)_

A good narrative document will include some indication of hierarchy between components - how they fit together, in a so-called 'component tree' (like [this simple example](https://www.elegantthemes.com/blog/wp-content/uploads/2018/10/image3.png)).

## Exercise 3: Thinking in components

> 🎯 **Success criterion:** a component tree diagram for an app or website of your choice.

Read these two articles:

1. [https://blog.bitsrc.io/atomic-design-and-ui-components-theory-to-practice-f200db337c24](Atomic Design and UI Components: Theory to Practice)
2. [https://atomicdesign.bradfrost.com/chapter-2/](Atomic Design Methodology)

Then pick an app or website that you like, and see if you can reverse-engineer a component tree diagram from it.

## Exercise 4: Check your understanding

> 🎯 **Success criterion:** a conversation with a Faculty member and amended comments.

Talk to a member of Faculty about your understanding of the game and of TypeScript.

Amend your notes for any important points that come out of the conversation.

## Exercise 5: Commentary and reflection

> 🎯 **Success criterion:** documented reflections.
