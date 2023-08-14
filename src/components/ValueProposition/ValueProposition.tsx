'use client'

import React from 'react';
import classNames from "classnames";

import classes from './ValueProposition.module.scss'
import {Button} from "@/components/Button/Button";
import {cards} from "@/components/ValueProposition/constants";

interface ValuePropositionProps {
}

export const ValueProposition: React.FC<ValuePropositionProps> = (props) => {

  const handleGetStartedClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = process.env.NEXT_PUBLIC_APP_URL as string
    }
  }

  return (
    <div className={classes.valueProposition}>
      <div className={'container'}>
        <div className={classes.featuresWrapper}>
          <div>
            <div
              className={classes.featuresTextWrapper}>
              <h2 className={classes.featuresTitle}>Navigating Success with your AI Business Partner</h2>
              {/*<p className={classes.featuresDescriptionText}></p>*/}
              <div className={classes.primaryButtonWrapper}>
                <Button text={'Try Now!'} onClick={handleGetStartedClick}/>
              </div>
            </div>
          </div>
          <div className={classes.featuresContent}>
            <div className={classes.featuresBottomContent}>
              <div className={classes.featuresGrid}>
                {cards.map((card, index) => {
                  return (
                    <div key={index}
                         className={classNames([classes.featuresSingle, classes[`featuresSingle${index + 1}`]])}>
                      <div className={classes.featuresBox}>
                        <div className={classes.featuresImageWrap}>
                          <img
                            src={card.icon}
                            loading="lazy"
                            className={classes.featuresImage}
                          />
                        </div>
                        <div className={classes.featuresText}>
                          <h2 className={classes.featuresSingleTitle}>{card.title}</h2>
                          <p className={classes.featuresSingleDescriptionText}>
                            {card.description}
                          </p>
                          <div className={classes.featuresLinkArrowWrapper}>
                            <a href={card.url} className={classes.featuresLinkArrow}>
                              <div className={classes.featuresLinkTextBlockWrap}>
                                <div className={classes.featuresLinkTextBlock}>
                                  Contact Us
                                </div>
                              </div>
                              <img
                                alt=""
                                loading="lazy"
                                src="https://assets.website-files.com/6455ed9f0d3281b2f933d00d/64574d3313de7850e34ec327_Tertiary%20Arrow1.svg"
                                className={classes.featuresLinkArrowImage}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
