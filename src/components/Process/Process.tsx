import React from 'react';

import classes from './Process.module.scss'
import classNames from "classnames";

interface ProcessProps {

}

export const Process: React.FC<ProcessProps> = (props) => {
  return (
    <div className={classes.process}>
      <div className="container">
        <div className={classes.processSectionTitleWrapper}>
          <h2 className={classes.processSectionTitle}>process zohatic has follow</h2>
          <p className={classes.processSectionParagraphText}>
            We have become a preferred partner to the leading biofuel refiners, major oil companies, blenders,
            retailers, and other commodity company.
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
          <img
            src="https://assets.website-files.com/6455ed9f0d3281b2f933d00d/645a49337b0a306ac4165ecf_Process%20Arrow1.png"
            loading="lazy" alt="" className={classes.processArrowImage1}
          />
          <img
            src="https://assets.website-files.com/6455ed9f0d3281b2f933d00d/645a49336a368fb58addf629_Process%20Arrow2.png"
            loading="lazy" alt="" className={classes.processArrowImage2}
          />
          {/*<div className="process-line" style="will-change: width, height; width: 39.043%; height: 1px;"></div>*/}
        </div>
      </div>
    </div>
  );
};
