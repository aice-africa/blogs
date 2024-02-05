/* eslint-disable @next/next/no-img-element */
// components/Skill.tsx
import React from 'react';

interface SkillProps {
  name: string;
  description: string;
  logo: string;
}

const Skill: React.FC<SkillProps> = ({ name, description, logo }) => (
  <div>
    (// eslint-disable-next-line @next/next/no-img-element)
    <img src={logo} alt={`${name} Logo`} style={{ maxWidth: '100px' }} />
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

export default Skill;
