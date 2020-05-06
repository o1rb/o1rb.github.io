---
title: Creating a new user in MySQL.
description: In this post we will learn how to create a new user in MySQL.
categories:
 - tutorial
tags: MySQL
---

Hi there.

This week I got a problem with MySQL.<br />
I don't know the reason, but, default credentials MySQL stoped work .<br />
After some tests, I only fix that creating a new user in MySQL.

The process is a piece of cake, look below:

After log in in MySQL with `root`:

```sql
CREATE USER 'newUser'@'localhost' IDENTIFIED BY 'newUserPassword';
```

```sql
GRANT ALL PRIVILEGES ON *.* TO 'newUser'@'localhost' WITH GRANT OPTION;
```

So, it's done.
