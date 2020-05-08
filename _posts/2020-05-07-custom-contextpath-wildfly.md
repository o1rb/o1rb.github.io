---
title: Customizing the context path in Wildfly 19
description: In this post we will learn how to personalize the context path in Wildfly 19.
categories:
 - tutorial
tags: WildFly
---

Hi there.

Developing web applications with Java by default the context path is generated from the artifact base name without your extension.

For example, if testProject.war is an artifact the context path will be `testProject`:<br />
`http://hostname:port/testProject`.

Working with Wildfly 19, change de context path is easy.<br />

It's only necessary create a file named `jboss-web.xml`.
Put it inside WEB-INF.<br />
Define the new context inside `context-root` tag.<br />
Like below:

```xml
<jboss-web xmlns="http://www.jboss.com/xml/ns/javaee"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:schemaLocation="http://www.jboss.com/xml/ns/javaee
                               http://www.jboss.org/schema/jbossas/jboss-web_14_0.xsd"
           version="14.0">
  <context-root>/myCustomContext</context-root>
</jboss-web>
```

Now, the context path will be `myCustomContext`.<br />
`http://hostname:port/testProject`.

See you soon.
