<p align="center">
    <a href="https://dunwu.github.io/design/" target="_blank" rel="noopener noreferrer">
        <img src="https://raw.githubusercontent.com/dunwu/images/dev/common/dunwu-logo.png" alt="logo" width="150px"/>
    </a>
</p>

<p align="center">

  <a href="https://github.com/dunwu/design">
      <img alt="star" class="no-zoom" src="https://img.shields.io/github/stars/dunwu/design?style=for-the-badge">
  </a>

  <a href="https://github.com/dunwu/design">
      <img alt="fork" class="no-zoom" src="https://img.shields.io/github/forks/dunwu/design?style=for-the-badge">
  </a>

  <a href="https://github.com/dunwu/design/commits/master">
      <img alt="commit" class="no-zoom" src="https://img.shields.io/github/workflow/status/dunwu/design/CI?style=for-the-badge">
  </a>

  <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">
      <img alt="code style" class="no-zoom" src="https://img.shields.io/github/license/dunwu/design?style=for-the-badge">
  </a>

</p>

<h1 align="center">DESIGN</h1>

> ☕ **DESIGN** 是个人对于软件系统架构的心得和总结。
>
> 架构之道，在于权衡；权衡之术，在于取舍。
>
> - 🔁 项目同步维护：[Github](https://github.com/dunwu/design/) | [Gitee](https://gitee.com/turnon/design/)
> - 📖 电子书阅读：[Github Pages](https://dunwu.github.io/design/) | [Gitee Pages](http://turnon.gitee.io/design/)

## 📖 内容

### 设计步骤

解决方案（Solution），就是针对某些已经体现出的，或者可以预期的问题、不足、缺陷、需求等等，所提出的一个解决整体问题的可行性方案。就软件系统而言，解决方案就是一个可以解决具体业务问题，并且可以落地的软件系统。

解决方案，毫无疑问是顶层系统设计，这需要设计者既懂技术，也懂业务。

#### 第一步：需求分析

把所有需要的东西聚集在一起，审视问题。不停的提问，以至于我们可以明确使用场景和约束。讨论假设。

- **What**：系统的作用是什么？系统的目标是什么？
- **Who**：系统的用户群体是谁？
- **How**：用户希望怎样使用系统？系统如何为用户提供服务？
- **How many**：有多少用户？日活/月活有多少？——用户体量会极大的影响系统的性能要求，从而影响系统的规模和复杂度。
  - **容量**：系统需要处理多少数据？
  - **并发量、吞吐量**：系统需要每秒钟处理多少请求？
  - **读写比率**：系统的读写比率是多少？——读多写少或写多读少决定了不同的架构方案。
- **How much**：系统的预算是多少（包括物料、人力成本等）？
- **输入输出**：系统的输入输出分别是什么？

#### 第二步：顶层设计

使用所有重要的组件来描绘出一个高层级的设计。

- 画出主要的组件和连接
- 证明你的想法

#### 第三步：组件设计

对每一个核心组件进行详细深入的分析。

#### 第四步：扩展设计

确认和处理瓶颈以及一些限制。举例来说就是你需要下面的这些来完成扩展性的议题吗？

- 负载均衡
- 水平扩展
- 缓存
- 数据库分片

### 设计

#### 架构

##### 综合

- [如何设计系统](docs/03.设计/01.架构/00.综合/00.如何设计系统.md)
- [系统架构面试总结](docs/03.设计/01.架构/00.综合/01.系统架构面试.md)
- [系统架构概述](docs/03.设计/01.架构/00.综合/02.系统架构概述.md)
- [系统高性能架构](docs/03.设计/01.架构/00.综合/03.系统高性能架构.md)
- [系统高可用架构](docs/03.设计/01.架构/00.综合/04.系统高可用架构.md)
- [系统伸缩性架构](docs/03.设计/01.架构/00.综合/05.系统伸缩性架构.md)
- [系统扩展性架构](docs/03.设计/01.架构/00.综合/06.系统扩展性架构.md)
- [系统安全性架构](docs/03.设计/01.架构/00.综合/07.系统安全性架构.md)
- [大型系统核心技术](docs/03.设计/01.架构/00.综合/08.大型系统核心技术.md)
- [系统测试架构](docs/03.设计/01.架构/00.综合/09.系统测试架构.md)

##### 微服务

- [微服务简介](docs/03.设计/01.架构/01.微服务/01.微服务简介.md)
- [微服务基本原理](docs/03.设计/01.架构/01.微服务/02.微服务基本原理.md)

##### 安全

- [认证和授权](docs/03.设计/01.架构/02.安全/01.认证和授权.md)
- [OAuth2.0](docs/03.设计/01.架构/02.安全/02.OAuth2.0.md)

#### 设计模式

[面向对象原则](docs/03.设计/02.设计模式/25.面向对象原则.md)

##### 创建型模式

> 创建型模式提供了创建对象的机制， 能够提升已有代码的灵活性和可复用性。

- [简单工厂模式 (Simple Factory)](docs/03.设计/02.设计模式/01.简单工厂模式.md)
- [工厂方法模式 (Factory Method)](docs/03.设计/02.设计模式/02.工厂方法模式.md)
- [抽象工厂模式 (Abstract Factory)](docs/03.设计/02.设计模式/03.抽象工厂模式.md)
- [建造者模式 (Builder)](docs/03.设计/02.设计模式/04.建造者模式.md)
- [原型模式 (Prototype)](docs/03.设计/02.设计模式/05.原型模式.md)
- [单例模式 (Singleton)](docs/03.设计/02.设计模式/06.单例模式.md)

##### 结构型模式

> 结构型模式介绍如何将对象和类组装成较大的结构， 并同时保持结构的灵活和高效。

- [适配器模式 (Adapter)](docs/03.设计/02.设计模式/07.适配器模式.md)
- [桥接模式 (Bridge)](docs/03.设计/02.设计模式/08.桥接模式.md)
- [组合模式 (Composite)](docs/03.设计/02.设计模式/09.组合模式.md)
- [装饰模式 (Decorator)](docs/03.设计/02.设计模式/10.装饰模式.md)
- [外观模式 (Facade)](docs/03.设计/02.设计模式/11.外观模式.md)
- [享元模式 (Flyweight)](docs/03.设计/02.设计模式/12.享元模式.md)
- [代理模式 (Proxy)](docs/03.设计/02.设计模式/13.代理模式.md)

##### 行为型模式

> 行为模式负责对象间的高效沟通和职责委派。

- [模板方法模式 (Template Method)](docs/03.设计/02.设计模式/14.模板方法模式.md)
- [命令模式 (Command)](docs/03.设计/02.设计模式/15.命令模式.md)
- [迭代器模式 (Iterator)](docs/03.设计/02.设计模式/16.迭代器模式.md)
- [观察者模式 (Observer)](docs/03.设计/02.设计模式/17.观察者模式.md)
- [解释器模式 (Interpreter)](docs/03.设计/02.设计模式/18.解释器模式.md)
- [中介者模式 (Mediator)](docs/03.设计/02.设计模式/19.中介者模式.md)
- [职责链模式 (Chain of Responsibility)](docs/03.设计/02.设计模式/20.职责链模式.md)
- [备忘录模式 (Memento)](docs/03.设计/02.设计模式/21.备忘录模式.md)
- [策略模式 (Strategy)](docs/03.设计/02.设计模式/22.策略模式.md)
- [访问者模式 (Visitor)](docs/03.设计/02.设计模式/23.访问者模式.md)
- [状态模式 (State)](docs/03.设计/02.设计模式/24.状态模式.md)

#### 重构

- [代码的坏味道和重构](docs/03.设计/03.重构/01.代码的坏味道和重构.md)
- [代码坏味道之代码臃肿](docs/03.设计/03.重构/02.代码坏味道之代码臃肿.md)
- [代码坏味道之滥用面向对象](docs/03.设计/03.重构/03.代码坏味道之滥用面向对象.md)
- [代码坏味道之变革的障碍](docs/03.设计/03.重构/04.代码坏味道之变革的障碍.md)
- [代码坏味道之非必要的](docs/03.设计/03.重构/05.代码坏味道之非必要的.md)
- [代码坏味道之耦合](docs/03.设计/03.重构/06.代码坏味道之耦合.md)

#### UML

- [UML 快速入门](docs/03.设计/11.UML/01.UML快速入门.md)
- [UML 结构建模图](docs/03.设计/11.UML/02.UML结构建模图.md)
- [UML 行为建模图](docs/03.设计/11.UML/03.UML行为建模图.md)

## 📚 资料

- **书籍**
  - [《大型网站技术架构：核心原理与案例分析》](https://item.jd.com/11322972.html) - 浅显易懂的将解大型网站架构演进之路；简介了大型系统所面临的挑战以及核心技术点。
  - [《亿级流量网站架构核心技术：跟开涛学搭建高可用高并发系统》](https://item.jd.com/12153914.html)
  - [大型网站系统与 Java 中间件实践](https://item.jd.com/11449803.html)
  - [企业 IT 架构转型之道：阿里巴巴中台战略思想与架构实战](https://item.jd.com/12176278.html) - 阐述阿里巴巴中台系统发展，更多的是讲解应用场景和能力，没有讲解技术细节。
  - [逆流而上：阿里巴巴技术成长之路](https://item.jd.com/12238227.html) - 主要以运维的视角阐述系统运维中遇到的困难，定位思路以及解决方法。
  - [《Head First 设计模式》](https://book.douban.com/subject/2243615/)
  - [《大话设计模式》](https://book.douban.com/subject/2334288/)
  - [《重构——改善既有代码的设计》](https://book.douban.com/subject/4262627/)
- **教程**
  - [system-design-primer](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md)
  - [从 0 开始学架构](https://time.geekbang.org/column/intro/100006601)
  - [从 0 开始学微服务](https://time.geekbang.org/column/intro/100014401)
  - [RPC 实战与核心原理](https://time.geekbang.org/column/intro/100046201)
  - [微服务架构核心 20 讲](https://time.geekbang.org/course/intro/100003901)
  - [DDD 实战课](https://time.geekbang.org/column/intro/100037301)
  - [Sparx UML 教程](https://sparxsystems.cn/resources/uml2_tutorial/index.html)
  - [UML Tutorial](https://www.tutorialspoint.com/uml/index.htm)
  - [W3Cschool UML 教程](https://www.w3cschool.cn/uml_tutorial/)
  - https://sourcemaking.com/refactoring

## 🚪 传送

◾ 🏠 [DESIGN 首页](https://github.com/dunwu/design) ◾ 🎯 [钝悟的博客](https://github.com/dunwu/blog) ◾

> 你可能会感兴趣：

- [Java 教程](https://github.com/dunwu/java-tutorial) 📚
- [JavaCore 教程](https://dunwu.github.io/javacore/) 📚
- [JavaTech 教程](https://dunwu.github.io/javatech/) 📚
- [Spring 教程](https://dunwu.github.io/spring-tutorial/) 📚
- [Spring Boot 教程](https://dunwu.github.io/spring-boot-tutorial/) 📚
- [数据库教程](https://dunwu.github.io/design/) 📚
- [Java 初学者](https://www.scaler.com/topics/course/java-beginners/)
- [数据结构和算法教程](https://dunwu.github.io/algorithm-tutorial/) 📚
- [Linux 教程](https://dunwu.github.io/linux-tutorial/) 📚
- [Nginx 教程](https://github.com/dunwu/nginx-tutorial/) 📚
