---
title: JEP 358 - Helpful NullPointerExceptions
description: In this post we will learn how to use the new feature that show us more details on exceptions.
categories:
 - tutorial
tags: JDK-14
---

Simple classes.

```java
class Car {
  private Tire tire;

  public Tire tire() {
    return this.tire;
  }

}
```

```java
class Tire {
  private String brand;

  public String brand() {
    return this.brand;
  }

}
```

```java
class Main {

  public static void main(String[] args) {
    Car ferrari = new Car();
    ferrari.tire().brand();
  }

}
```

Before JDK 14 the Null Pointer Exception it was like:


>Exception in thread "main" java.lang.NullPointerException
>	at dev.o1rb.study.jdk.Main.main(Main.java:7)


With JDK 14, the same exception looks like:


>Exception in thread "main" java.lang.NullPointerException: Cannot  invoke "dev.o1rb.study.jdk.Tire.brand()" because the return value of "dev.o1rb.study.jdk.Car.tire()" is null
>	at dev.o1rb.study.jdk.Main.main(Main.java:7)

It's because of the JEP 358: Helpful NullPointerExceptions(https://openjdk.java.net/jeps/358).
This JEP 358 improve the usability of NullPointerExceptions generated by the JVM by describing precisely which variable was null.

Only need add this command line when run `-XX:+ShowCodeDetailsInExceptionMessages` and enjoy.

It's very nice!