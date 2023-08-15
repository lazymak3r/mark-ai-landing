import React from 'react';
import Image from 'next/image'
import classNames from "classnames";

import classes from './Process.module.scss'
import Process_Arrow1 from '../../assets/images/Process_Arrow1.png'
import Process_Arrow2 from '../../assets/images/Process_Arrow2.png'

interface ProcessProps {

}

export const Process: React.FC<ProcessProps> = (props) => {
  return (
    <div className={classes.process}>
      <div className="container">
        <div className={classes.processSectionTitleWrapper}>
          <h2 className={classes.processSectionTitle}>Path to Success</h2>
          <p className={classes.processSectionParagraphText}>
            From idea inception to market understanding, harness AI&apos;s prowess to generate innovative concepts,
            refine
            them for maximum impact, and gain deeper insights into market dynamics for informed decision-making.
          </p>
        </div>
        <div className={classes.processWrapper}>
          <div className={classes.processGrid}>
            <div className={classes.processSingleWrapper}>
              <div className={classNames([classes.processNumberWrapper, classes.processNumberWrapper1])}>
                <div className={classes.processNumber}>1</div>
              </div>
              <h3 className={classes.processTitle}>Idea Generation</h3>
              <p className={classes.processDescriptionText}>
                Fueling innovation through creative brainstorming and trend exploration.
              </p>
            </div>
            <div className={classes.processSingleWrapper}>
              <div className={classNames([classes.processNumberWrapper, classes.processNumberWrapper2])}>
                <div className={classes.processNumber}>2</div>
              </div>
              <h3 className={classes.processTitle}>Idea Improvement</h3>
              <p className={classes.processDescriptionText}>
                Enhancing concepts with strategic insights and refined planning.
              </p>
            </div>
            <div className={classes.processSingleWrapper}>
              <div className={classNames([classes.processNumberWrapper, classes.processNumberWrapper3])}>
                <div className={classes.processNumber}>3</div>
              </div>
              <h3 className={classes.processTitle}>Market Research</h3>
              <p className={classes.processDescriptionText}>
                Unveiling insights, trends, and opportunities for informed decision-making.
              </p>
            </div>
          </div>
          <Image
            alt=""
            width={172}
            height={43}
            loading="lazy"
            className={classes.processArrowImage1}
            src={Process_Arrow1}
          />
          <Image
            alt=""
            width={172}
            height={43}
            loading="lazy"
            className={classes.processArrowImage2}
            src={Process_Arrow2}
          />
          {/*<div className="process-line" style="will-change: width, height; width: 39.043%; height: 1px;"></div>*/}
        </div>
      </div>
    </div>
  );
};
