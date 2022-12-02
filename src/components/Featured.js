import React from 'react'
import picture2 from "../images/lmfao.jpg";
import picture1 from "../images/background2.jpg";
import bg1 from "../images/bg01.jpg";
import bg2 from "../images/bg02.jpg";
import bg3 from "../images/bg03.jpg";
import bg4 from "../images/bg04.jpg";
import Card from './Card';
const Featured = () => {
    const cards = [
        {
          bg: picture1,
          profile: picture2,
          title: "Fire Emblem Heroes",
          description:
            "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
          size: <p>85,532 Online &#x2022; 232,061 Members</p>,
        },
        {
          bg: bg1,
          profile: picture2,
          title: "Fire Emblem Heroes",
          description:
            "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
          size: <p>85,532 Online &#x2022; 232,061 Members</p>,
        },
        {
          bg: bg2,
          profile: picture2,
          title: "Fire Emblem Heroes",
          description:
            "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
          size: <p>85,532 Online &#x2022; 232,061 Members</p>,
        },
        {
          bg: bg3,
          profile: picture2,
          title: "Fire Emblem Heroes",
          description:
            "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
          size: <p>85,532 Online &#x2022; 232,061 Members</p>,
        },
        {
          bg: bg4,
          profile: picture2,
          title: "Fire Emblem Heroes",
          description:
            "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
          size: <p>85,532 Online &#x2022; 232,061 Members</p>,
        },
        {
          bg: picture1,
          profile: picture2,
          title: "Fire Emblem Heroes",
          description:
            "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
          size: <p>85,532 Online &#x2022; 232,061 Members</p>,
        },
        {
          bg: bg1,
          profile: picture2,
          title: "Fire Emblem Heroes",
          description:
            "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
          size: <p>85,532 Online &#x2022; 232,061 Members</p>,
        },
        {
          bg: bg2,
          profile: picture2,
          title: "Fire Emblem Heroes",
          description:
            "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
          size: <p>85,532 Online &#x2022; 232,061 Members</p>,
        },
        {
          bg: bg3,
          profile: picture2,
          title: "Fire Emblem Heroes",
          description:
            "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
          size: <p>85,532 Online &#x2022; 232,061 Members</p>,
        },
      ];
  return (
    <div className='pt-6'>
        <div className='  text-white'>
            <p className='font-bold text-[20px]'>Featured Servers</p>
            <p className='text-white/50'>Some awesome Discords we think you'd love </p>
        </div>

        <div className='space-y-12'>
            {cards.map((card)=><Card 
            bg={card.bg} profile={card.profile}
            title={card.title} description={card.description} 
            size={card.size}
            />)}
        </div>
    </div>
  )
}

export default Featured