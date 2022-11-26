import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 gap-7 mt-7">
      <div>
        <div className="border rounded-lg p-4 grid grid-cols-1 gap-7">
          <h1 className="text-3xl font-bold">
            How does prototypical inheritance work ?
          </h1>
          <p>
            JavaScript is a prototype-based, Object Oriented programming
            language. After the ES6 updates, JavaScript allowed for “prototypal
            inheritance”, meaning that objects and methods can be shared,
            extended, and copied. Sharing amid objects makes for easy
            inheritance of structure (data fields), behavior (functions /
            methods), and state (data values). JavaScript is the most common of
            the prototype-capable languages, and its capabilities are relatively
            unique. When used appropriately, prototypical inheritance in
            JavaScript is a powerful tool that can save hours of coding. Today,
            we want to get you acquainted with prototypal inheritance in
            JavaScript to get you up to date with the ES6 capabilities.
          </p>
        </div>
      </div>
      <div>
        <div className="border rounded-lg p-4 grid grid-cols-1 gap-7">
          <h1 className="text-3xl font-bold">Title</h1>
          <p>
            React can be used as a UI library to render elements, without
            enforcing a specific project structure, and that's why it's not
            strictly a framework. React Elements are the smallest building
            blocks of React apps. They are more powerful than DOM elements
            because the React DOM makes sure to update them efficiently whenever
            something changes. Components are larger building blocks that define
            independent and reusable pieces to be used throughout the
            application. They accept inputs called props and produce elements
            that are then displayed to the user. React is based on JavaScript,
            but it's mostly combined with JSX (JavaScript XML), a syntax
            extension that allows you to create elements that contain HTML and
            JavaScript at the same time.
          </p>
          <p>
            The Vue.js core library focuses on the View layer only. It's called
            a progressive framework because you can extend its functionality
            with official and third-party packages, such as Vue Router or Vuex,
            to turn it into an actual framework. Although Vue is not strictly
            associated with the MVVM (Model-View-ViewModel) pattern, its design
            was partly inspired by it. With Vue, you'll be working mostly on the
            ViewModel layer, to make sure that the application data is processed
            in a way that allows the framework to render an up-to-date View.
            Vue's templating syntax lets you create View components, and it
            combines familiar HTML with special directives and features. This
            templating syntax is preferred, even though raw JavaScript and JSX
            are also supported. Components in Vue are small, self-contained, and
            can be reused throughout the application. Single File Components
            (SFCs) with the .vue extension contain HTML, CSS, and JavaScript so
            that all relevant code resides in one file. SFCs are the recommended
            way to organize code in Vue.js projects, especially larger ones.
            Tools such as Webpack or Browserify are required to transpile SFCs
            into working JavaScript code.
          </p>
          <p>
            In this article, I'm discussing Angular 2, and not the first version
            of the framework which is now known as AngularJS. AngularJS, the
            original framework, is an MVC (Model-View-Controller)) framework.
            But in Angular 2, there's no strict association with MV*-patterns as
            it is also component-based. Projects in Angular are structured into
            Modules, Components, and Services. Each Angular application has at
            least one root component and one root module. Each component in
            Angular contains a Template, a Class that defines the application
            logic, and MetaData (Decorators). The metadata for a component tells
            Angular where to find the building blocks that it needs to create
            and present its view. Angular templates are written in HTML but can
            also include Angular template syntax with special directives to
            output reactive data and render multiple elements, among other
            things. Services in Angular are used by Components to delegate
            business-logic tasks such as fetching data or validating input. They
            are a distinct part of Angular applications. While Angular doesn't
            enforce their use, it's highly suggested to structure apps as a set
            of distinct services that can be reused. Angular is built in
            TypeScript, so its use is recommended to get the most seamless
            experience, but plain JavaScript is also supported.
          </p>
        </div>
      </div>
      <div>
        <div className="border rounded-lg p-4 grid grid-cols-1 gap-7">
          <h1 className="text-3xl font-bold">
            What is unit testing and why would we use it?
          </h1>
          <p>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.
          </p>
        </div>
      </div>
      <div>
        <div className="border rounded-lg p-4 grid grid-cols-1 gap-7">
          <h1 className="text-3xl font-bold">
            What are the different ways to manage a state in a React
            application?
          </h1>
          <p>
            1. Logical State The logical state has a store to cover the
            information of the business logic that is essential to carry out the
            main functional requirements of the app. The store is predefined
            with the data schema to easily carry out actions like save, update,
            delete and view. The pieces of information stored here are required
            globally across the app.
          </p>
          <p>
            2. Server State The server state handles the server-side data
            introduced by the HTTP request. The information contains data and
            request states like loading, fetching, and error.
          </p>
          <p>
            The form state is used to hold the multiple types of data used in a
            form. Mainly the state of form constructors like Input fields,
            Select, Checkbox, Radio Button, and Toggle switch is handled here.
            This state is limited to a few components.
          </p>
          <p>
            4. Navigation State The navigation state is about the paths and
            parameters in a URL that is used to show the states of a page for
            better user-friendly navigation. These states are especially useful
            to create an impeccable search functionality by having the search
            word, sort, and filter options in a URL to maintain the search
            states. The paths in the URL represent a component hierarchy that
            helps to learn the app.
          </p>
          <p>
            5. Browser State The browser state handles the details of the
            current user of the application. It mostly reads when the component
            is mounted. These states are stored locally in key-value pairs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
