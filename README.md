[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=5755388&assignment_repo_type=AssignmentRepo)
# Assignment A2a:  Object Modeling

This repository implements the starting point of a three.js program in TypeScript.

## Due: Friday October 1st, 8:00am

## Rubric

Graded out of 10.

1. Recognizable object.  (1)
2. At least 12 parts.  (1)
3. At least 2 different kinds of parts. (1)
4. Most/all parts touching/overlapping. (1)
5. At least 2 different materials. (1)
6. Root is at intuitive position in object (1)
7. At least 3 levels of hierarchy. (1)
8. Use a mix of 3 basic transforms on hierarchy nodes. (1)
9. Creativity.  (1.8)
10. Turn in an image with your name as the filename.  (0.2)

## Overview and Learning Goals

The goal of this project is for you to practice using a scene graph to assemble 3D scene out of 3D objects. A secondary learning goal is to learn the basics of the [three.js](https://threejs.org) graphics library, which you will be using for this and other assignments in the class. 

For this assignment, you will create a single complex object by combining multiple simple objects into a hierarchy (see below). This is part one of a two-part project. During the second part (A2b), you will incorporate this object into a 3D animated scene that tells a simple story, and this scene will also be of your own choosing.  

Decide on an object that you want to include in an animated scene in A2b. You should select the main character, or “protagonist” object from your planned animation to use in this assignment. Keep in mind that a main character does not need to be a human or animal character, but can be almost anything that you can build a story around (e.g. musical instrument, telephone, house, car, or vacuum cleaner). In A2b of this project, you will concentrate on making things move in your final short animation.

Do not use a snowman or the green android character (the mascot for the mobile OS) as your main character -- if you do, this will be an automatic 2 point deduction.  They are too simple and "obvious" examples;  we would like to see you be more creative.

The key aspect of this assignment is that the 3D object that you create should be made up of multiple pieces. You will use the scene graph hierarchy and transformations (rotate, scale, translate) on the graph nodes to put together the parts to form the final object.

Here are the required elements for your main character:

- Your object should be something recognizable, and not some abstract or random shape.
- Use at least twelve different sub-parts to make your object (e.g. six spheres and six cylinders).
- Include at least two different kinds of parts in your object (e.g. sphere and block).
- Most or all of the sub-parts of your object should be touching or overlapping each other.
- Use at least two different colors (three.js Materials) in your object.
- the "root" of your object graph should have it's origin at an intuitive position of your object. This will make it easier to animate in A2b.  For example, if you were creating a human, the origin might be the center of the body or the waist, but a hand, foot, or eye would not be an intuitive choice. (While not required, you should also consider which parts of the object you might want to animate in A2b, and arrange for their local origin to be in an intuitive place. For example, it will be easier to rotate a character's head if the local origin is at the place it rotates on the neck, rather than being at the center point of the head.)
- You must use at least 3 levels of hierarchy: the root node is one level, the parts are a the final level, and there should be at least one level of nodes (with transforms) between them. These intermediate nodes should have transformation on them: you should not just position and rotate the parts directly below the root node, there should be another level of transformations between each part and the root. 
- Make use of all three basic transformations to assemble your object (rotate, scale, translate).

The three.js sample code includes a simple camera controller so that you can rotate the scene with the mouse;  you should size you object so that it fits in the area viewed by this camera.  If you want to create an object that is bigger or smaller than the area viewed around the origin of this sample scene, simply add a node above your object's root node, and apply a scale to make your object a different size.

## Resources

In this assignment, and others later in the semester, you will use the [three.js](https://threejs.org) graphics library, a very popular open-source graphics library for the web.  It is actively being developed and widely used.  

In addition to the resources on the website (including documentation and many examples), the website [threejsfundamentals.org](https://threejsfundamentals.org/) is a great resource for learning the library. I'd recommend you start there, and only refer to the threejs.org site for reference, or for specific three.js features. For this assignment, I highly recommend working through some of the Basics sections ([Fundamentals](https://threejsfundamentals.org/threejs/lessons/threejs-fundamentals.html) is a great introduction, and the other sections can be skimmed but aren't necessary for these projects), as well as the [Primitives](https://threejsfundamentals.org/threejs/lessons/threejs-primitives.html), [Scenegraph](https://threejsfundamentals.org/threejs/lessons/threejs-scenegraph.html), and some of the [Materials](https://threejsfundamentals.org/threejs/lessons/threejs-materials.html) sections in "Fundamentals".

Beyond these resources, there are many open source projects based on three.js.  While you should not be using code from the web in this and future assignments, together these resources give you a vast set of learning resources.

Of course, feel free to reach out to the instructor, TA, and your classmates for help and pointers.

## Effort is Part of the Grade

This assignment will be graded partially based on our assessment of the amount of care, effort, and creativity that you put into creating your object. If you choose a simple object and throw it together, you will not get a high score on the “effort” component of this project.  18% of the project will be based on our assessment of your effort.

## Optional Elements

If you wish to, you may add any three.js Material properties to your object, such as textures or other builtin effects. It is not necessary to add complex Materials in order to have a successful object for this project. Simple materials such as those used in the sample code are fine, as are more complex ones.

You should use the built-in three.js classes for creating cubes, cylinders, cones, tori, and spheres for your object's parts.  If you feel they are not sufficient for making your object you should feel free to create more complex geometry meshes, although this is not required. If you create a sub-part with polygon code of your own, this can count as one of the kinds of parts in your object.

Feel free to make use of any programming structures you would like to assemble your object. If some of the sub-parts of an object are regularly spaced, using a loop to create and position these parts is entirely appropriate. You may find that your object’s parts really ought to be made of even smaller parts. If so, great! It is fine for the sub-parts to have sub-sub-parts, and a deep and complex scene graph.

## Turn In a Screen Shot

Please include a JPG or PNG image of your object as part of the files that you turn in.  Try to keep your image square in shape, and give the file your name (e.g. jane_doe.jpg).  0.2 out of 10 points for this project will be for you including this screen shot of your object.  Here is an example of such an image (although yours should be of your character):

![sample scene](sample.png)

## Not Allowed

The object that you turn in for this project should not be an object that was created using a modeling or animation package such as Blender or Maya.  For this assignment, you are not allowed to read an object from a file, even to use as a subpart.

## Authorship Rules

The code that you turn in entirely your own. You are allowed to talk to other members of the class and to the instructor and the TA’s about general implementation of the assignment. It is also fine to seek the help of others for general three.js/Typescript programming questions. You may not, however, use code that anyone other than yourself has written. The only exception is that you should use the example source code that we provide for this project. Code that is explicitly not allowed includes code taken from the Web, github, from books, from the [three.js](https://threejs.org) web site, from other assignments, from other students or from any source other than yourself. You should not show your code to other students. Feel free to seek the help of the instructor and the TA's for suggestions about debugging your code.

# Submission

You will check out the project from GitHub Classroom, and submit it there.  All of your code should be in the file `app.ts`. You may extra files if you wish to use them to structure your code.

**Do Not Change the names** of the existing files (e.g., index.html, app.ts, etc).  The TAs need to be able to test your program as follows:

1. cd into the directory and run ```npm install```
2. run with ```npm run dev```
3. visit ```http://localhost:3000/index.html```

Please test that your submission meets these requirements. For example, after you check in your final version of the assignment to github, check it out again to a new directory and make sure everything builds and runs correctly.
 
## Development Environment

The development environment is the same as used in previous assignments.

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Computer Graphics CS3451 Fall 2021</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.blairmacintyre.me" property="cc:attributionName" rel="cc:attributionURL">Blair MacIntyre</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

The intent of choosing (CC BY-NC-SA 4.0) is to allow individuals and instructors at non-profit entities to use this content.  This includes not-for-profit schools (K-12 and post-secondary). For-profit entities (or people creating courses for those sites) may not use this content without permission (this includes, but is not limited to, for-profit schools and universities and commercial education sites such as Corsera, Udacity, LinkedIn Learning, and other similar sites).
