'use client'

import React from 'react';
import Image from "next/image";

import classes from "./Hero.module.scss";
import Hero_Image from '../../assets/images/Hero_Image.png'
import Hero_Card_Image1 from '../../assets/images/Hero_Card_Image2.png'
import Hero_Card_Image2 from '../../assets/images/Hero_Card_Image2.png'
import Hero_Image_Shape1 from '../../assets/images/Hero_Image_Shape1.png'
import Banner_Title_Shape from '../../assets/images/Banner_Title_Shape.png'
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
              <Image
                alt=""
                width={47}
                height={60}
                loading="lazy"
                className={classes.heroTitleShape}
                src={Banner_Title_Shape}
              />
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
            <Image
              alt=""
              width={430}
              height={584}
              loading="lazy"
              src={Hero_Image_Shape1}
              className={classes.heroImageShape1}
            />
            <div className={classes.heroImageShape2} style={{backgroundColor: "rgb(225, 255, 207)"}}>
              <div className={classes.heroImageWrap}>
                <Image
                  alt=""
                  loading="lazy"
                  width={422}
                  height={600}
                  src={Hero_Image}
                  className={classes.heroImage}
                />
              </div>
            </div>
            <Image
              alt=""
              loading="lazy"
              className={classes.heroCardImage1}
              width={240}
              height={179}
              src={Hero_Card_Image1}
            />
            <Image
              alt=""
              width={270}
              height={200}
              loading="lazy"
              className={classes.heroCardImage2}
              src={Hero_Card_Image2}
            />
            <div className={classes.heroCardShape4}></div>
            <div className={classes.heroCardShape5}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
