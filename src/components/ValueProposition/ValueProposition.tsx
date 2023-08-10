import React from 'react';

import classes from './ValueProposition.module.scss'
import {Button} from "@/components/Button/Button";
import classNames from "classnames";

interface ValuePropositionProps {

}

const cards = [1, 2, 3, 4]

export const ValueProposition: React.FC<ValuePropositionProps> = (props) => {
  return (
    <div className={classes.valueProposition}>
      <div className={'container'}>
        <div className={classes.featuresWrapper}>
          <div>
            <div
              className={classes.featuresTextWrapper}>
              <h2 className={classes.featuresTitle}>holistic view of a business insight operations</h2>
              <p className={classes.featuresDescriptionText}>
                It&apos;s never been easier to create beautiful
                and functional website. zohatic provides you with everything you need to get started and make an
                impact.
              </p>
              <div className={classes.primaryButtonWrapper}>
                <Button text={'get started for free'}/>
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
                            src="https://assets.website-files.com/6455ed9f0d3281b2f933d00d/645a225849c0965e52b95648_Hv2%20Features%20Image1.svg"
                            loading="lazy" alt=""
                            className={classes.featuresImage}
                          />
                        </div>
                        <div className={classes.featuresText}>
                          <h2 className={classes.featuresSingleTitle}>Lightning fast speed</h2>
                          <p className={classes.featuresSingleDescriptionText}>
                            We believe you should have access to the most important data at no extra cost. Get Store
                            Overview, Email Reports
                          </p>
                          <div className={classes.featuresLinkArrowWrapper}>
                            <a href="/contact-us" className={classes.featuresLinkArrow}>
                              <div className={classes.featuresLinkTextBlockWrap}>
                                <div className={classes.featuresLinkTextBlock}>
                                  contact us
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
