(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{399:function(t,r,e){"use strict";e.r(r);var a=e(4),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("blockquote",[r("p",[t._v("翻译自：https://sourcemaking.com/refactoring/smells/change-preventers")]),t._v(" "),r("p",[r("strong",[t._v("变革的障碍(Change Preventers)这组坏味道意味着：当你需要改变一处代码时，却发现不得不改变其他的地方。这使得程序开发变得复杂、代价高昂。")])])]),t._v(" "),r("h2",{attrs:{id:"发散式变化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#发散式变化"}},[t._v("#")]),t._v(" 发散式变化")]),t._v(" "),r("blockquote",[r("p",[r("code",[t._v("发散式变化(Divergent Change)")]),t._v(" 类似于 "),r("code",[t._v("霰弹式修改(Shotgun Surgery)")]),t._v(" ，但实际上完全不同。"),r("code",[t._v("发散式变化(Divergent Change)")]),t._v(" 是指一个类受多种变化的影响。"),r("code",[t._v("霰弹式修改(Shotgun Surgery)")]),t._v(" 是指多种变化引发多个类相应的修改。")])]),t._v(" "),r("h3",{attrs:{id:"特征"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特征"}},[t._v("#")]),t._v(" 特征")]),t._v(" "),r("p",[t._v("你发现你想要修改一个函数，却必须要同时修改许多不相关的函数。例如，当你想要添加一个新的产品类型时，你需要同步修改对产品进行查找、显示、排序的函数。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/divergent-change-1.png",alt:"img"}})]),t._v(" "),r("h3",{attrs:{id:"问题原因"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题原因"}},[t._v("#")]),t._v(" 问题原因")]),t._v(" "),r("p",[t._v("通常，这种发散式修改是由于编程结构不合理或者“复制-粘贴式编程”。")]),t._v(" "),r("h3",{attrs:{id:"解决办法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[t._v("#")]),t._v(" 解决办法")]),t._v(" "),r("ul",[r("li",[t._v("运用 "),r("code",[t._v("提炼类(Extract Class)")]),t._v(" 拆分类的行为。")])]),t._v(" "),r("h3",{attrs:{id:"收益"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#收益"}},[t._v("#")]),t._v(" 收益")]),t._v(" "),r("ul",[r("li",[t._v("提高代码组织结构")]),t._v(" "),r("li",[t._v("减少重复代码")])]),t._v(" "),r("h3",{attrs:{id:"重构方法说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重构方法说明"}},[t._v("#")]),t._v(" 重构方法说明")]),t._v(" "),r("h4",{attrs:{id:"提炼类-extract-class"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#提炼类-extract-class"}},[t._v("#")]),t._v(" 提炼类(Extract Class)")]),t._v(" "),r("p",[r("strong",[t._v("问题")])]),t._v(" "),r("p",[t._v("某个类做了不止一件事。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/extract-class-before.png",alt:"img"}})]),t._v(" "),r("p",[r("strong",[t._v("解决")])]),t._v(" "),r("p",[t._v("建立一个新类，将相关的字段和函数从旧类搬移到新类。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/extract-class-after.png",alt:"img"}})]),t._v(" "),r("h2",{attrs:{id:"平行继承体系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#平行继承体系"}},[t._v("#")]),t._v(" 平行继承体系")]),t._v(" "),r("blockquote",[r("p",[r("code",[t._v("平行继承体系(Parallel Inheritance Hierarchies)")]),t._v(" 其实是 "),r("code",[t._v("霰弹式修改(Shotgun Surgery)")]),t._v(" 的特殊情况。")])]),t._v(" "),r("h3",{attrs:{id:"特征-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特征-2"}},[t._v("#")]),t._v(" 特征")]),t._v(" "),r("p",[t._v("每当你为某个类添加一个子类，必须同时为另一个类相应添加一个子类。这种情况的典型特征是：某个继承体系的类名前缀或类名后缀完全相同。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/parallel-inheritance-hierarchies-1.png",alt:"img"}})]),t._v(" "),r("h3",{attrs:{id:"问题原因-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题原因-2"}},[t._v("#")]),t._v(" 问题原因")]),t._v(" "),r("p",[t._v("起初的继承体系很小，随着不断添加新类，继承体系越来越大，也越来越难修改。")]),t._v(" "),r("h3",{attrs:{id:"解决方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),r("ul",[r("li",[t._v("一般策略是：让一个继承体系的实例引用另一个继承体系的实例。如果再接再厉运用 "),r("code",[t._v("搬移函数(Move Method)")]),t._v(" 和 "),r("code",[t._v("搬移字段(Move Field)")]),t._v("，就可以消除引用端的继承体系。")])]),t._v(" "),r("h3",{attrs:{id:"收益-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#收益-2"}},[t._v("#")]),t._v(" 收益")]),t._v(" "),r("ul",[r("li",[t._v("更好的代码组织")]),t._v(" "),r("li",[t._v("减少重复代码")])]),t._v(" "),r("h3",{attrs:{id:"何时忽略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#何时忽略"}},[t._v("#")]),t._v(" 何时忽略")]),t._v(" "),r("ul",[r("li",[t._v("有时具有并行类层次结构只是一种为了避免程序体系结构更混乱的方法。如果你发现尝试消除平行继承体系导致代码更加丑陋，那么你应该回滚你的修改。")])]),t._v(" "),r("h3",{attrs:{id:"重构方法说明-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重构方法说明-2"}},[t._v("#")]),t._v(" 重构方法说明")]),t._v(" "),r("h4",{attrs:{id:"搬移函数-move-method"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#搬移函数-move-method"}},[t._v("#")]),t._v(" 搬移函数(Move Method)")]),t._v(" "),r("p",[r("strong",[t._v("问题")])]),t._v(" "),r("p",[t._v("你的程序中，有个函数与其所驻类之外的另一个类进行更多交流：调用后者，或被后者调用。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/move-method-before.png",alt:"img"}})]),t._v(" "),r("p",[r("strong",[t._v("解决")])]),t._v(" "),r("p",[t._v("在该函数最常引用的类中建立一个有着类似行为的新函数。将旧函数变成一个单纯的委托函数，或是旧函数完全移除。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/move-method-after.png",alt:"img"}})]),t._v(" "),r("h4",{attrs:{id:"搬移字段-move-field"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#搬移字段-move-field"}},[t._v("#")]),t._v(" 搬移字段(Move Field)")]),t._v(" "),r("p",[r("strong",[t._v("问题")])]),t._v(" "),r("p",[t._v("在你的程序中，某个字段被其所驻类之外的另一个类更多地用到。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/move-field-before.png",alt:"img"}})]),t._v(" "),r("p",[r("strong",[t._v("解决")])]),t._v(" "),r("p",[t._v("在目标类新建一个字段，修改源字段的所有用户，令他们改用新字段。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/move-field-after.png",alt:"img"}})]),t._v(" "),r("h2",{attrs:{id:"霰弹式修改"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#霰弹式修改"}},[t._v("#")]),t._v(" 霰弹式修改")]),t._v(" "),r("blockquote",[r("p",[r("code",[t._v("霰弹式修改(Shotgun Surgery)")]),t._v(" 类似于 "),r("code",[t._v("发散式变化(Divergent Change)")]),t._v(" ，但实际上完全不同。"),r("code",[t._v("发散式变化(Divergent Change)")]),t._v(" 是指一个类受多种变化的影响。"),r("code",[t._v("霰弹式修改(Shotgun Surgery)")]),t._v(" 是指多种变化引发多个类相应的修改。")])]),t._v(" "),r("h3",{attrs:{id:"特征-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特征-3"}},[t._v("#")]),t._v(" 特征")]),t._v(" "),r("p",[t._v("任何修改都需要在许多不同类上做小幅度修改。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/shotgun-surgery-1.png",alt:"img"}})]),t._v(" "),r("h3",{attrs:{id:"问题原因-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题原因-3"}},[t._v("#")]),t._v(" 问题原因")]),t._v(" "),r("p",[t._v("一个单一的职责被拆分成大量的类。")]),t._v(" "),r("h3",{attrs:{id:"解决方法-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决方法-2"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),r("ul",[r("li",[t._v("运用"),r("code",[t._v("搬移函数(Move Method)")]),t._v(" 和 "),r("code",[t._v("搬移字段(Move Field)")]),t._v(" 来搬移不同类中相同的行为到一个独立类中。如果没有适合存放搬移函数或字段的类，就创建一个新类。")]),t._v(" "),r("li",[t._v("通常，可以运用 "),r("code",[t._v("将类内联化(Inline Class)")]),t._v(" 将一些列相关行为放进同一个类。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/shotgun-surgery-2.png",alt:"img"}})]),t._v(" "),r("h3",{attrs:{id:"收益-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#收益-3"}},[t._v("#")]),t._v(" 收益")]),t._v(" "),r("ul",[r("li",[t._v("更好的代码组织")]),t._v(" "),r("li",[t._v("减少重复代码")]),t._v(" "),r("li",[t._v("更易维护")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/shotgun-surgery-3.png",alt:"img"}})]),t._v(" "),r("h3",{attrs:{id:"重构方法说明-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重构方法说明-3"}},[t._v("#")]),t._v(" 重构方法说明")]),t._v(" "),r("h4",{attrs:{id:"搬移函数-move-method-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#搬移函数-move-method-2"}},[t._v("#")]),t._v(" 搬移函数(Move Method)")]),t._v(" "),r("p",[r("strong",[t._v("问题")])]),t._v(" "),r("p",[t._v("你的程序中，有个函数与其所驻类之外的另一个类进行更多交流：调用后者，或被后者调用。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/move-method-before.png",alt:"img"}})]),t._v(" "),r("p",[r("strong",[t._v("解决")])]),t._v(" "),r("p",[t._v("在该函数最常引用的类中建立一个有着类似行为的新函数。将旧函数变成一个单纯的委托函数，或是旧函数完全移除。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/move-method-after.png",alt:"img"}})]),t._v(" "),r("h4",{attrs:{id:"搬移字段-move-field-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#搬移字段-move-field-2"}},[t._v("#")]),t._v(" 搬移字段(Move Field)")]),t._v(" "),r("p",[r("strong",[t._v("问题")])]),t._v(" "),r("p",[t._v("在你的程序中，某个字段被其所驻类之外的另一个类更多地用到。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/move-field-before.png",alt:"img"}})]),t._v(" "),r("p",[r("strong",[t._v("解决")])]),t._v(" "),r("p",[t._v("在目标类新建一个字段，修改源字段的所有用户，令他们改用新字段。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/move-field-after.png",alt:"img"}})]),t._v(" "),r("h4",{attrs:{id:"将类内联化-inline-class"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#将类内联化-inline-class"}},[t._v("#")]),t._v(" 将类内联化(Inline Class)")]),t._v(" "),r("p",[r("strong",[t._v("问题")])]),t._v(" "),r("p",[t._v("某个类没有做太多事情。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/inline-class-before.png",alt:"img"}})]),t._v(" "),r("p",[r("strong",[t._v("解决")])]),t._v(" "),r("p",[t._v("将这个类的所有特性搬移到另一个类中，然后移除原类。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/master/cs/design/refactor/inline-class-after.png",alt:"img"}})]),t._v(" "),r("h2",{attrs:{id:"扩展阅读"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[t._v("#")]),t._v(" 扩展阅读")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E7%9A%84%E5%9D%8F%E5%91%B3%E9%81%93%E5%92%8C%E9%87%8D%E6%9E%84.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码的坏味道和重构"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E4%BB%A3%E7%A0%81%E8%87%83%E8%82%BF.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码坏味道之代码臃肿"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E6%BB%A5%E7%94%A8%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码坏味道之滥用面向对象"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E5%8F%98%E9%9D%A9%E7%9A%84%E9%9A%9C%E7%A2%8D.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码坏味道之变革的障碍"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E9%9D%9E%E5%BF%85%E8%A6%81%E7%9A%84.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码坏味道之非必要的"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E8%80%A6%E5%90%88.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码坏味道之耦合"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://book.douban.com/subject/4199741/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《代码整洁之道》"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://book.douban.com/subject/4262627/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《重构 - 改善既有代码的设计》"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://book.douban.com/subject/1477390/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《代码大全》"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("https://sourcemaking.com/refactoring")])])])}),[],!1,null,null,null);r.default=s.exports}}]);