import React from 'react';
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiGit,
  SiGithub,
  SiPostman,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiStreamlit,
  SiLangchain
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';
import {
  Brain,
  Cpu,
  Layers,
  MessageSquareCode,
  Binary,
  Code2,
  Database,
  Server,
  Layout,
  Wrench,
  Terminal,
  Sparkles
} from 'lucide-react';

const iconMap = {
  // Languages & Web
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiCss3: SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiOpenjdk: FaJava,
  Java: FaJava,
  SiGit,
  SiGithub,
  SiPostman,
  VscCode,
  TbApi,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiStreamlit,
  SiLangchain,
  // Lucide icons
  Brain,
  Cpu,
  Layers,
  MessageSquareCode,
  Binary,
  Code2,
  Database,
  Server,
  Layout,
  Wrench,
  Terminal,
  Sparkles
};

export default function TechIcon({ name, className = 'w-5 h-5', style }) {
  const IconComponent = iconMap[name] || Code2;
  return <IconComponent className={className} style={style} />;
}
