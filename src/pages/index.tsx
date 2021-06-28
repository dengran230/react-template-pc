import React from 'react';
import { Tag } from 'antd';
import styles from './index.less';

const data = [
  {
    icon: 'https://cdnhyt.cd120.com/public/assets/pc-template/1.svg',
    title: '基础项目模版',
    desc: '基于umi3开发的PC端通用项目模版，支持typescript开发，快速接入微前端方案',
  },
  {
    icon: 'https://cdnhyt.cd120.com/public/assets/pc-template/2.svg',
    title: '代码规范校验',
    desc: '配置git提交检测与代码lint校验，对代码进行强约束，避免不规范的编码行为',
  },
  {
    icon: 'https://cdnhyt.cd120.com/public/assets/pc-template/3.svg',
    title: '内置通用组件',
    desc: '提供通用的业务组件与样板代码，内置常用函数与工具类，减少重复的编码工作',
  },
];

export default () => {
  const renderContent = () => (
    <div className={styles.content}>
      {data.map(({ icon, title, desc }) => (
        <div className={styles.item} key={icon}>
          <img className={styles.icon} alt="" src={icon} />
          <div className={styles.title}>{title}</div>
          <div className={styles.desc}>{desc}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div>
          <h1 className={styles.title}>PC项目模版</h1>
          <Tag color="orange">{APP_ENV}</Tag>
        </div>
        <div className={styles.subTitle}>基于umi3 + react hooks + antd + typescript + less技术栈</div>
        <button type="button" className={styles.btn}>
          Get Started
        </button>
      </div>
      {renderContent()}
    </div>
  );
};
