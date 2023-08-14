'use client'

import React from 'react';

import classes from "./Hero.module.scss";
import {Button} from "@/components/Button/Button";

interface HeroProps {
}

export const Hero: React.FC<HeroProps> = (props) => {

  const handleGetStartedClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = process.env.NEXT_PUBLIC_APP_URL as string
    }
  }

  return (
    <div className={classes.hero}>
      <div className={'container'}>
        <div className={classes.heroContent}>
          <div className={classes.heroTitleWrapper}>
            <div className={classes.heroTitleSingleWrapper}>
              <h2 className={classes.heroTitle}>Meet your AI Startup Co-founder!</h2>
              <img
                src="https://assets.website-files.com/6455ed9f0d3281b2f933d00d/645604d709c5e1af690a6312_Banner%20Title%20Shape.png"
                loading="lazy" alt="" className={classes.heroTitleShape}/>
            </div>
            <p
              className={classes.heroDescriptionText}>
              Think of it like having an AI-powered business partner by your side. It&apos;ll brainstorm business ideas,
              dig
              deep into market research, refine your plans, and be there for all your business needs. As you grow and
              hire more people, he&apos;ll be right there, helping out. From the first idea to building your team, he
              has got
              your back.
            </p>
            <Button text={'Try Now!'} onClick={handleGetStartedClick}/>
          </div>
          <div className={classes.heroImageWrapper}>
            <img
              src="https://assets.website-files.com/6455ed9f0d3281b2f933d00d/6459ea9a6165ba2ab14280f2_Hero%20Image%20Shape1.png"
              loading="lazy" alt="" className={classes.heroImageShape1}
            />
            <div className={classes.heroImageShape2} style={{backgroundColor: "rgb(225, 255, 207)"}}>
              <div className={classes.heroImageWrap}>
                <img
                  src="https://assets.website-files.com/6455ed9f0d3281b2f933d00d/6459ebbbe2193158358b29be_Hero%20Image.png"
                  loading="lazy" sizes="(max-width: 479px) 258px, (max-width: 767px) 318px, 422px"
                  srcSet="https://assets.website-files.com/6455ed9f0d3281b2f933d00d/6459ebbbe2193158358b29be_Hero%20Image-p-500.png 500w, https://assets.website-files.com/6455ed9f0d3281b2f933d00d/6459ebbbe2193158358b29be_Hero%20Image-p-800.png 800w, https://assets.website-files.com/6455ed9f0d3281b2f933d00d/6459ebbbe2193158358b29be_Hero%20Image-p-1080.png 1080w, https://assets.website-files.com/6455ed9f0d3281b2f933d00d/6459ebbbe2193158358b29be_Hero%20Image.png 1266w"
                  alt="" className={classes.heroImage}
                />
              </div>
            </div>
            <img
              src="https://assets.website-files.com/6455ed9f0d3281b2f933d00d/6459ede69870f222713f8412_Hero%20Card%20Image1.png"
              loading="lazy" sizes="(max-width: 479px) 140px, (max-width: 767px) 150px, (max-width: 991px) 230px, 240px"
              srcSet="https://assets.website-files.com/6455ed9f0d3281b2f933d00d/6459ede69870f222713f8412_Hero%20Card%20Image1-p-500.png 500w, https://assets.website-files.com/6455ed9f0d3281b2f933d00d/6459ede69870f222713f8412_Hero%20Card%20Image1.png 726w"
              alt="" className={classes.heroCardImage1}
            />
            <img
              src="https://assets.website-files.com/6455ed9f0d3281b2f933d00d/6459ede67a6d806cd1341a92_Hero%20Card%20Image2.png"
              loading="lazy"
              sizes="(max-width: 479px) 140px, (max-width: 767px) 150px, (max-width: 991px) 240px, 270px"
              srcSet="https://assets.website-files.com/6455ed9f0d3281b2f933d00d/6459ede67a6d806cd1341a92_Hero%20Card%20Image2-p-500.png 500w, https://assets.website-files.com/6455ed9f0d3281b2f933d00d/6459ede67a6d806cd1341a92_Hero%20Card%20Image2-p-800.png 800w, https://assets.website-files.com/6455ed9f0d3281b2f933d00d/6459ede67a6d806cd1341a92_Hero%20Card%20Image2.png 811w"
              alt="" className={classes.heroCardImage2}
            />
            <img
              src="https://assets.website-files.com/6455ed9f0d3281b2f933d00d/6459ede7f348e9525dbd7d82_Hero%20Card%20Image3.png"
              loading="lazy" alt="" className={classes.heroCardImage3}
            />
            <div className={classes.heroCardShape4}></div>
            <div className={classes.heroCardShape5}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
