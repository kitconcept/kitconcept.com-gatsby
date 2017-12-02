---
title: Headless and Mobile - The Future of Plone
date: "2015-05-06T23:46:37.121Z"
---

Summary of two presentations by Victor Fernandez de Alba, Albert Casado and Timo Stollenwerk during PLOG 2017

This is the summary of two presentations that we (Victor Fernandez de Alba, Albert Casado, and Timo Stollenwerk) gave during the Plone Open Garden 2017 in Sorrento, Italy. The views expressed in our talks and in this summary are just personal opinions and it is up to the Plone community to decide to implement them.

# A RESTful API for Plone

plone.restapi was started at Plone Open Garden in Sorrento three years ago. We did our first Angular 1 project on top of Plone in 2013 and we felt the need for a standardized out-of-the-box solution to expose and manage Plone content through a RESTful API.



The Beauty and the Beast - Modern Javascript Development with AngularJS and Plone from Timo Stollenwerk

The first alpha release of plone.restapi was published in July 2016. 4teamwork provided support for Archetypes and helped to refactor the serializers/deserializers. Since then plone.restapi has been used in production by 4teamwork, CodeSyntax, kitconcept, VNC, and others.

# Current status of plone.restapi

The core functionality of plone.restapi is a content API to manage Plone content that can be serialized Dexterity and Archetypes-based content from and into JSON. The content API allows manipulating content together with workflow states, access permissions, and local roles.

plone.restapi provides service endpoints for registry entries, vocabularies, and search. A types endpoint returns JSON schema to auto-generating forms. A users and groups endpoint allows managing users and groups. Users can authenticate with basic authentication as well as with a token-based authentication (JWT).

# Beethoven Sprint in Bonn

In March 2017 fifteen Plone developers from eight different countries gathered in Bonn, Germany at the kitconcept office to finish the missing features and solve the last blockers for to road to a final plone.restapi release. At the end of the sprint we were able to release plone.restapi 1.0a10 which included more features than any release before. This release introduces a sharing, vocabularies, copy/move, and principals endpoints. We finished the API design for components and expansion, which were the main blockers because they require some minor breaking API changes.





# Roadmap to plone.restapi 1.0

The current plone.restapi release is 1.0a13 and we plan to do another release this month that includes a file upload endpoint that allows resumable uploads via TUS. A pull request by Thomas Buchberger is already in place that needs to be reviewed and merged.

We plan to do another release is in May 2017, that will include an expansion mechanism that allows embedding information such as navigation, breadcrumbs, workflow, permissions, etc. within a content response. After this release, we might be able to declare the API stable and enter the beta stage.

We hope to be able to do a final 1.0 release before the Plone conference in Barcelona in October 2017. Features that we are actively working on and that might be included are a history/versioning endpoint and a multilingual/translation endpoint.

# Towards a Headless CMS

Web technologies continue to change at a very high pace and so does the CMS market. Traditional Content Management Systems have a hard time finding the balance between the stability that is required to manage long living content on large projects and the requirements of modern websites and with state-of-the-art JavaScript front-end technologies.

Content Management Systems need to evolve from systems that manage and render content to managing arbitrary “resources” and factor out the rendering part in order to be able to keep the pace of a fast-changing front-end ecosystem. Plone has been able to provide stability and scalability for long lasting and large projects over the last decade. plone.restapi will allow us to combine that with latest and greatest JavaScript front-end technologies and libraries to build state-of-the-art user-friendly user interfaces.

# API Approachability and a Browsable API

A critical factor to the success of any API is approachability, ease of use, and quality of the documentation. Hypermedia APIs such as plone.restapi allow the user (or the developer) to browse through the API as a human user would do on a website by following links to the next resource. This allows consumers of the API to explore the API instead of having to look up every single detail in the documentation.

A browsable API should also allow the consumer to manage content via the API by providing auto-generated forms for adding or editing content.

Django REST Framework is an example of hugely popular REST API that is successful because, among other things, it provides a browsable API to the user. The Django community managed to raise funding of 30.000 £ for Django REST Framework 3. plone.restapi core won't need this kind of funding because the development is mostly covered by real-world project needs. Though, the development of a browsable API is hard to rationalize within such a context.

# Building Bridges

The idea of plone.restapi was to create an abstraction layer around the main features of the Plone Content Management System to expose our unique set of features that not many systems on the market can match.

It was always part of our plan to allow to implement different backend solutions at some point. Due to the hard work and visionary of Ramon, with the help of Nathan and Asko, we have this option available sooner than any of us would have imagined. This leaves us in a very comfortable position. If you start a new Plone project today you have three very good options. All of them embody the main treats and the unique Plone essence that we all know and love. You can:

- Use plone.restapi today with Plone 4.x or Plone 5.x with both Archetypes and Dexterity. This allows you to build state-of-the-art front-end solutions on top of existing projects for basically any Plone project (Plone 4 was released in 2010). This is the recommended option if you work on a traditional content-centric Website or Portal that requires fast first-time-page-rendering and requires to be found on Google (SEO).

- Use plone.restapi with Plone 4.x or Plone 5.x with a custom modern JavaScript front-end build entirely on Angular2 or React. Using modern JS frameworks allows you to largely re-use existing libraries, which reduces the amount of work that is necessary to build a custom web application. This is the preferred solution for any intranet like application with a highly customized UI, that requires logged-in users.

- Use Guillotina with its plone.restapi compliant API with a custom front-end. This is the preferred solution if you do not require all the functionality of standard Plone but rather look for a highly scalable solution with and modern backend.

# The Challenges

Everything in life comes with a cost. And so does following three different paths, instead of just one. Traditionally, Plone supports a wide variety of use cases. We need to provide the stability that is needed for a large portal that is built over 5 or 10 years, as well as the agility of a state-of-the-art web-application that uses the latest JS framework.

In order to do so, we need to build bridges between the three options outlined above, to not waste too much time and energy building the same components two or three times for the different branches.

The two “bridges” that we need to build are: keeping Guillotina and plone.restapi in sync and share JavaScript libraries and widgets between standard Plone and new front-end solutions on top of Plone.

## Keeping Guillotina and plone.restapi in Sync

The first challenge is to keep the APIs between plone.restapi and Guillotina in sync. This might sound easy at first. Though, keep in mind that Plone and Guillotina use a different storage, different routing and a different set of functionality. They are brothers (or sisters) in the spirit. Though, they significantly differ under the hood. To keep the APIs in sync, the first thing we need is a formal specification that allows us to automatically test the APIs for compatibility.

Unfortunately, this is not as easy as it sounds because non of the existing API frameworks such as Swagger, Blueprint, or RAML support arbitrary API routes that are required for traversal.

Though, if we can manage to keep the APIs in sync we can share front-end libraries between the two and might even be able to fully replace the traditional Plone backend with Guillotina at some point in the future.

Keeping two APIs in sync and sharing libraries across systems is not a trivial task. Though, we believe that this is doable and worth the effort in the end.

## Sharing JS Libraries and Widgets

The second challenge is to allow to share JavaScript libraries between a traditional Plone site and the modern JS libraries and the new front-end solutions we are building.

The main problem here is that the JavaScript world is moving so fast that it is hard for us to keep the pace and at the same time provide the stability that is needed by our clients.

The Plone 5.x JavaScript stack has been started five years ago, which is a very long time in a field where we see ground breaking changes or new libraries at least once a year.

Plone currently uses Bower as a package manager, RequireJS to define dependencies between JavaScript components, Gulp as a bundler and task manager, jQuery as the main JavaScript framework, and Patternslib/Mockup for widgets.

Bower has been replaced by NPM for front-end developing long time ago. Yarn, a modern package manager by Facebook which is based on NPM, allows repeatable and stable bundling that we know from Python and Buildout. RequireJS is barely used these days since Webpack and SystemJS became the de-facto standard for declaring dependencies between JavaScript components and for bundling.

There are lots of large and well-maintained widget libraries out, some with more contributors than Plone itself (e.g. Angular Material, Semantic UI), that allows us to become consumers of libraries instead of the burden of having to maintain our own library.

Though, as mentioned before, stability is a major factor for Plone and we can not effort breaking Plone sites and consumers in the Plone 5.x branch.

The always forward-thinking Asko Soukka worked on allowing to use Webpack as a bundler for Plone 5.x. As mentioned earlier, Webpack is the current de-facto solution for bundling JS applications and it is used by both the Angular as well as the React community.

If we manage to simplify the Resource Registry and publish Plone JS packages on NPM, we might be able to go into the right direction without breaking too much existing stuff.

The Plone framework team already approved a PLIP by Nathan van Gheem to use React in Plone core. This will allow us to replace existing widgets with modern solutions and might allow us to share widgets between existing Plone 5.x sites and modern front-end libraries.

Having plone.restapi in core is a pre-condition to this. Though, there are a few blockers (unrelated to plone.restapi itself) that need to be fixed in Plone 5.1.

# Mobile First UI

Mobile is overtaking desktop on web browsing in the recent years. Content Management Systems need to take this into account. The Barceloneta theme that was introduced with Plone 5 is a mobile ready theme that works on both mobile and desktop. In 2017 we believe it is time for a mobile first theme, that also allows the user to manage content via mobile phones.

Albert Casado, who is responsible for the Barceloneta theme, re-imagined Plone as a mobile first Content Management System with the Pastanaga UI:



Invisioning UX and UI from kitconcept GmbH

The Pastanaga UI is the result of studying how to improve the user experience and user interactions in Plone. It is still work in progress and Albert plans to continue to work on this during the next months.



The results will be included in a new User Experience style guide for Plone. This guide will provide core and add-on developers with a guide to maintain consistency and coherence through all the content management system UI.

One of the core principles of the new user experience is reducing the mental overhead for the user because they will have to understand two basic UX principles: go ahead, and go back.



Visual reassurance will be also provided to the user of what they are doing (or going to do) via visual hints (e.g. state colors).



For more, please take a look at the presentation.

Pastanaga UI will also provide a new set of widgets, along with their UI/UX and user interactions, and a new set of icons. It will also provide a set of visual patterns to structure and define a hierarchy of elements that will guide the user in all their actions. They will be easily reusable in add-ons too in order to preserve visual coherence everywhere.

Last but not least, Patanaga UI will require a new theme to complete the picture. Stay tuned for updates on the Pastanaga UI!

# Summary

We sincerely believe that the Plone community and the Plone CMS have a unique opportunity to re-imagine how content is managed on the web. We have both the community and the knowledge how to do content management right. We have a secure, stable and mature platform with a unique set of features.

plone.restapi allows us to expose this to the world in an approachable way. New JavaScript technologies and frameworks are at our disposal and we just need to use and integrate them. The new Pastinaga UI will allow us to attract new users, plone.restapi together with plone.api has the potential to attract new developers by making Plone development more approachable.

The positive spirit and enthusiasm, that we felt during the Beethoven Sprint in Bonn, spread to the Plone Open Garden and the Plone community. Let's continue to do great things together!

# Authors

Victor Fernandez de Alba works at kitconcept and he is a Plone developer since ten years and six years as a Plone core developer. He is also member of the Plone Foundation Board of Directors. Among other things he helped build the Barceloneta Plone 5 theme and he is also responsible for the plone.org relaunch on Plone 5.

Albert Casado is a User Experience and Interaction Designer expert at HP in Barcelona. He leaded the Plone 5 Barceloneta theme and will be evangelizing again with the new mobile first Pastanaga Plone & Guillotina UI. He works for kitconcept as a freelancer when his busy time schedule permits it.

Timo Stollenwerk works at kitconcept and he is the main author of plone.restapi. He is a Plone developer since twelve years and a Plone core developer since seven years. He is member of the Plone framework team, the release team and the CI and testing team.