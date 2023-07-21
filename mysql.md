# [M946i.top](http://m946i.top)
# ![背景](http://m946i.top/wp-content/uploads/2023/04/2023-04-16_10-09-33_SEED_3804439353-1.png)
# 连接数据库
    mysql -h ip -P port -u user -p
    
    password
## DDL

    show databases; -- 显示所有数据库
    
    select database(); -- 查询当前数据库
    
    create database [if not exists] 数据库名 [default charset 字符集] [collate 排序规则]; -- 创建数据库
    
    drop database [if exist]; -- 删除数据库
    
    use 数据库名; -- 使用数据库
    
    show tables; -- 查询当前数据库所有表
    
    desc 表名; -- 查询表结构
    
    show create table 表名; -- 查询指定表建表语句
    
    create table 表名(
    
        column_name column_type
    
        -- id int unsigned not null comment '编号'
    
    ); 
    -- 创建表
    
    alter table 表名 add 字段名 类型(长度) [comment 注释] [约束]; -- 添加字段
    
    alter table 表名 modify 字段名 新数据类型(长度); -- 修改字段数据类型
    
    alter table change 旧字段名 新字段名 类型(长度) [comment 注释] [约束]; -- 修改字段名及字段数据类型
    
    alter table drop 字段名; -- 删除字段
    
    alter table 表名 rename to 新表名; -- 修改表名
    
    drop table [if exist] 表名; -- 删除表
    
    truncate table 表名; -- 删除并重建表

## DML

    insert into 表名(字段1,字段2,....) values(值1,值2,...); -- 指定字段添加数据
    
    insert into 表名 values(值1,值2,...); -- 给全部字段添加数据
    
    insert into 表名(字段1,字段2,....) values(值1,值2,...),(值1,值2,...),...(值1,值2,...),(值1,值2,...); -- 批量添加指定字段数据
    
    insert into 表名 values(值1,值2,...),(值1,值2,...),...(值1,值2,...),(值1,值2,...); -- 批量添加全部字段数据
    
    update 表名 set 字段1=值1,字段2=值2,...[where 条件]; -- 更新字段数据类型
    
    delete from 表名 [where 条件]; -- 删除数据


## DQL


    select distinct 字段 from 表名 where 条件列表 group by 分组字段列表 having 分组后条件列表 order by 排序字段列表 desc/asc  limit 分页参数;//条件查询
    
    select 字段1,字段2,字段3...from 表名; -- 查询多个字段
    
    select * from 表名;// 
    
    select 字段1 [as 别名1],字段2 [别名2],... from 表名; -- 设置别名
    
    select  distinct 字段列表 from 表名; -- 查询 去重
    
    select 字段列表 from 表名 where 条件列表; -- 条件 ( >  >=  <  <=  =  (<>  !=)  between...(小)and...(大)  in(...)(多选一)    like    is null  (and &&) (or ||)  (not !) )

聚合函数 
    
    count sum min max avg
    
    select count/sum/min/max/avg(字段名) from 表名 ...

执行顺序    
    
    from-where-group by-having-select-order by-limit


## DCL


    use mysql; -- 使用mysql数据库
    
    select * from user; -- 查询用户
    
    create user '用户名'@'主机名' identified by '密码'; -- 创建用户
    
    alter user '用户名'@'主机名' identified with mysql_native_password by '新密码'; -- 更改用户密码
    
    drop user '用户名'@'主机名'; -- 删除用户


    show grants for '用户名'@'主机名'; -- 查询权限
    
    grant 权限名 on 数据库.表名 to '用户名'@'主机名'; -- 授权
    
    revoke 权限名 on 数据库.表名 from '用户名'@'主机名'; -- 撤销权限
    
    concat(S1,S2,...Sn)  -- 字符串拼接，将s1，s2，...sn拼接成一个字符
    
    lower(str)  -- 小写
    
    upper(str)  -- 大写
    
    lpad(str,n,pad)  -- 左填充pad
    
    rpad(str,n,pad)  -- 右填充pad
    
    trim(str)  -- 去除头部尾部空格
    
    substring(str,start,len)  -- start->start+len字符串截取
    
    ceil(x) -- 向上取整
    
    floor(x)  -- 向下取整
    
    mod(x,y)  -- x/y的余数
    
    rand() -- 返回(0,1)之间的随机数
    
    round(x,y)  -- 求x四舍五入的值，保留y位小数


    curdate() -- 返回当前日期
    
    curtime() -- 返回当前时间
    
    now() -- 返回当前时间日期
    
    year(date)  -- 获取日期中的年
    
    month(date)  -- 获取日期中的月
    
    day(date)   -- 获取日期中的日
    
    date_add(date,interval expr type)
    
    datediff(date1,date2) //返回date1到date2的天数
    
    if(value,t,f)  //value为true 返回 t 否则返回 f
    
    ifnull(value1,value2) //value1为不为空 返回value1 否则 返回value2
    
    case when [var1] then [res1]...else [default] end  -- var1为true 返回res1 否则 返回default默认值(固定值)
    
    select case when id = 1 then 1 else 2 end;
    
    case [expr] when [var1] then [res1] ... else [default] end -- 非固定
    
    select case id when 1 then 1 else 2 end;


## 约束

    非空约束 not null
    
    唯一约束 unique
    
    主键约束 primary key
    
    默认约束 default [默认为1]
    
    检查约束 check
    
    外键约束 foreign key
## 多表关系
    一对多：在多的一方设置外键，关联一的一方的主键
    
    多对多：建立中间表，中间表包含两个外键，关联两张表的主键
    
    一对一：用于表结构拆分，在其中任何一方设置外键（UNIQUE），关联另一方的主键

##  多表查询

## 内连接 [交集部分]

隐式内连接 

    select 字段列表 from 表1,表2 where 条件...;

显示内连接

    select 字段列表 from 表1 [inner] join 表2 on 条件列表...;  
    -- [inner]可省略

## 外连接 

左外连接

    select 字段名称 from 表1 left [outer] join 表2 on 条件...;  
    -- [outer] 可省略

右外连接

    select 字段名称 from 表1 right [outer] join 表2 on 条件...;  
    -- [outer] 可省略

## 自连接

    select 字段名称 from 表A 别名A join 表A 别名B on 条件...;
    -- 自连接查询，可以是内连接查询，也可以是外连接查询。

## 联合查询

    select 字段名称 from 表A ...
    
        union [ALL]
    
    select 字段名称 from 表B ...; 
    -- 上下合并 查询字段的数量和类型必须相同 union ALL直接合并 union 去重

## 子查询 [嵌套查询]

    select * from 表1 where column1 = (select column1 from 表2);
    -- 子查询外部语句可以是insert/update/delete/select的任何一个。
### 根据子查询结果不同，分为:
    标量子查询（子查询结果为单个值）
    
    列子查询（子查询结果为一列）
    
    行子查询（子查询结果为一行）
    
    表子查询（子查询结果为多行多列）

### 标量子查询 
    =、<>、>、>=、<、<=
### 列子查询
    IN -- 在指定的集合范围内，多选一
    
    NOT IN -- 不在指定的集合范围之内
    
    ANY -- 子查询返回列表中，有任意一个满足即可
    
    SOME -- 与ANY等同，使用SOME的地方可以使用ANY
    
    ALL -- 子查询返回列表的所有值都必须满足
### 行子查询
    =、<>、IN、NOT IN 
### 表子查询
    IN
## 事务
###
#### 事务 是一组操作的集合，它是一个不可分割的工作单位，事务会吧所有的操作作为一个整体一起想系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。
###
### 事务操作
    select @@autocommit;
    
    set @@autocommit = 0;
    
    -- 查看/设置事务提交方式
    
    commit;
    
    -- 提交事务
    
    rollback;
    
    -- 回滚事务
### 事务四大特性
    原子性:事务是不可分割的最小操作单元，要么全部成功，要么全部失败。
    一致性:事务完成时，必须使所有的数据都保持一致的状态。
    隔离性:数据库系统提供隔离机制，保证事务在不受外部并发操作影响的独立环境下运行。
    持久性:事务一旦提交或回滚，它对数据库中的数据的改变就是永久的。
### 并发事务问题
    脏读:一个事务读到另一个事务还没有提交的数据。
    不可重复读:一个事务先后读取同一条记录，但两次读取的数据不同，称之为不可重复读。
    幻读:一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据已经存在，好像出现了”幻影“。
### 事务隔离级别
 ![事务](http://m946i.top/level.png)
    
    -- 查看事务隔离级别
    
    select @@transaction_isolation;
    
    -- 设置事务隔离级别
    
    set [session|global] transaction isolaction level {read uncommitted | read committed | repe}atable read | serializable}


## 存储引擎
![mysql 体系结构](http://m946i.top/MySQL_architecture.jpg)

## 存储引擎简介

### 在创建表时，指定存储引擎

    create table 表名
    (
    
        字段1 字段1类型 [comment 字段1注释],
        
        ......
        
        字段n 字段n类型 [comment 字段n注释]
    
    )engine = innodb [comment 表注释]

### 查看当前数据库支持的存储引擎

    show engines;

## 存储引擎特点

### InnoDB

介绍

    InnoDB是一种兼顾高可靠性和高性能的通用存储引擎，在MySQL5.5之后，InnoDB是默认的MySQL存储引擎。

特点

    DML操作遵循ACID模型，支持事务;
    行级锁，提高并发访问性能;
    支持外键FOREIGNKEY约束，保证数据的完整性和正确性;

文件

    xxx.ibd:xxx代表的是表名，innoDB引擎的每一张表都会对应这样一个空间文件，存储该表的表结构（frm、sdi）、数据和索引。
    参数：innodb_file_per_table
    
    show variables like 'innodb_file_per_table';
![Logical storage structure](http://m946i.top/Logical_storage_structure.jpg)
    -- 区:1M-64页-页:16k

### MyISAM

介绍

    MyISAM是MySQL早期的默认存储引擎。

特点

    不支持事务，不支持外键
    支持表锁，不支持行锁
    访问速度快

文件

    xxx.sdi: 存储表结构信息
    xxx.MYD: 存储数据
    xxx.MYI: 存储索引

###  Memory

介绍

    Memory引擎的表数据时存储再内存中的，由于收到硬件影响、或断电问题的影响，只能将这些表作为临时表或缓存表使用。

特点

    内存存放
    hash索引(默认)

文件

    xxx.sdi: 存储表结构信息

![sd](http://m946i.top/sd.png)

## 存储引擎选择

### 在选择存储引擎时，应该根据应用系统的特点选择合适的存储引擎。对于复杂的应用系统，还可以根据实际情况选择多种存储引擎进行组合。

    InnoDB: 是MySQL的默认存储引擎，支持事务、外键。如果是应用对事物的完整性有比较高的要求，再并发条件下要求数据一致性，数据操作除了插入和查询之外，还包含很多的更新、删除操作，那么InnoDB存储引擎是比较合适的选择。
    
    MyISAM: 如果应用是以读操作和插入操作为主，只有很少的更新和删除操作，并且事务的完整性、并发性要求不是很高，那么选择这个存储引擎是非常合适的。
    
    MEMORY: 将所用数据保存再内存中，访问速度快，通常用于临时表及缓存。MEMORY的缺陷就是对表的大小有限制，太大的表无法缓存在内存中，而且无法保证数据的安全性。

## MySQL安装(linux版)

    密码等级
    
    政策             执行的测试
    
    0或者LOW         长度
    
    1或者MEDIUM      长度；数字、小写/大写和特殊字符
    
    2或者STRONG      长度；数字、小写/大写和特殊字符；字典文件
       
    设置密码等级
    
    set global validate_password.policy = 0;
    
    设置密码长度
    
    set global validate_password.length = 4;

## 索引

### 索引概述

    介绍
    
    索引（index）是帮助MySQL高效获取数据的数据结构（有序）。在数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式引用（指向）数据，这样就可以在这些数据结构上实现高级查找算法，这种数据结构就是索引。

### 演示

<img src="http://m946i.top/wsy.png" alt="wsy" style="zoom: 80%;" />

<img src="http://m946i.top/ysy.png" alt="ysy" style="zoom: 80%;" />

### 优缺点

    优势：

    提高数据检索效率，降低数据库的IO成本
    
    通过索引列对数据进行排序，降低数据排序成本，降低CPU的消耗。

    劣势：

    索引列也是要占用空间的。

    索引大大提高了查询效率，同时却页降低了更新表的速度，如对表进行INSERT、UPDATE、DELETE时，效率降低。

## 索引结构

#### MySQL的索引是在存储引擎层实现的，不同的存储引擎有不同的结构，主要包含以下几种：

    B+Tree索引：最常见的索引类型，大部分引擎都支持B+树索引

    Hash索引：底层数据结构是用哈希表实现的，只能精确匹配索引列的查询才有效，不支持范围查询

    R-tree(空间索引)：空间索引是MyISAM引擎的一个特殊索引类型，主要用于地理空间数据类型，通常使用较少

    Full-test(全文索引)：是一种通过建立倒排序索引，快速匹配文档的方式。类似于Lucene，Solr，ES
![索引](http://m946i.top/suoyin.jpg)

### B-Tree(多路平和查找树)
    以一颗最大度数(max-degree)为5(5阶)的b-tree为例(每个节点最多存储4个key，5个指针):
    
    (树的度数指的是一个节点的子节点个数)。

![B树](http://m946i.top/B-Tree.jpg)

    当key为最大度数时，中间向上，两边变成叶子。

### B+Tree

    以一颗最大度数(max-degree)为4(4阶)的b+tree为例:

![B+树](http://m946i.top/B+Tree.jpg)

    非叶子节点起索引作用，叶子节点存数据，所有的数据都出现在叶子节点中。

    叶子节点形成一个单向链表。

***MySQL索引数据结构对经典的B+Tree进行了优化。在原B+Tree的基础上，增加一个指向相邻叶子节点的链表指针，就形成了带有顺序指针的B+Tree，提高区间访问的性能。***

    所有节点都存放于页中（16K默认）。

### Hash

哈希索引就是采用一定的Hash算法，将键值换算成新的Hash值，映射到对应的槽位上，然后存储在Hash表中。
    
    
    对于表中某个字段创建hash索引结构，首先算出表中每一行数据的hash值，再拿到字段的索引值，然后针对字段索引值通过其内部hash函数计算字段中的每个值的hash表的槽位。

![Hash](http://m946i.top/Hash.jpg)

    如果两个(或多个)键值，映射到一个相同的槽位上，他们就产生了hash冲突(也称为hash碰撞)，可以通过链表来解决。

#### Hash索引特点

    1.Hash索引只能用于对等比较(=,in),不支持范围查询(bteween,>,<,...)

    2.无法利用索引完成排序操作

    3.查询效率高，通常只需要依次检索就可以了，效率通常要高于B+Tree索引

#### 存储引擎支持

    在MySQL中，支持hash索引的是Memory引擎，而InnoDB中具有自适应hash功能，hash索引是存储引擎根据B+Tree索引在指定条件下自动构建的。

## 索引分类
    
    分类                含义                            特点                     关键字

    主键索引        针对于表中主键创建的索引            默认自动创建               PRIMARY

    唯一索引        避免同一个表中某数据中的值重复       可以有多个                UNIQUE

    常规索引        快速定位特定数据                    可以有多个                

    全文索引        全文索引查找的是文本中的关键字

    /|\             而不是比较索引中的值                可以有多个                FULLTEXT

*在InnoDB存储引擎中，根据索引的存储形式，又可以分为以下两种：*

    聚集索引(Clustered Index)
    
    定义：

    将数据存储与索引放到一块，索引结构的叶子节点保存了行数据

    特点：

    必须有，而且只有一个

    二级索引(Clustered Index)
    
    定义：

    将数据存储与索引分开存储，索引结构的叶子节点关联的是对应的主键

    特点：

    可以存放多个

### 聚集索引选取规则:

    如果存在主键，主键索引就是聚集索引。

    如果不存在主键，将使用第一个唯一(UNIQE)索引作为聚集索引。

    如果表没有主键，或灭有合适的唯一索引，则InnoDB会自动生成一个rowid作为隐藏的聚集索引。

### 回表查询

    指先走二级索引找到对应的主键值，再根据主键值到聚集索引拿到对应的行数据。
