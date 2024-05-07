import c from '/public/svg/skills/c.svg';
import canva from '/public/svg/skills/canva.svg';
import csharp from '/public/svg/skills/csharp.svg';
import css from '/public/svg/skills/css.svg';
import figma from '/public/svg/skills/figma.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import javascript from '/public/svg/skills/javascript.svg';
import kotlin from '/public/svg/skills/kotlin.svg';
import microsoftoffice from '/public/svg/skills/microsoftoffice.svg';
import mysql from '/public/svg/skills/mysql.svg';
import photoshop from '/public/svg/skills/photoshop.svg';
import picsart from '/public/svg/skills/picsart.svg';
import nodejs from '/public/svg/skills/nodejs.png';
import php from '/public/svg/skills/php.png';
import express from '/public/svg/skills/express.png';
import vbnet from '/public/svg/skills/vbnet.png';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'mysql':
      return mysql;
    case 'c':
      return c;
    case 'c#':
      return csharp;
    case 'kotlin':
      return kotlin;
    case 'php':
      return php;
    case 'git':
      return git;
    case 'figma':
      return figma;
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'canva':
      return canva;
      case 'nodejs':
      return nodejs;
      case 'express':
        return express;
          case 'vbnet':
            return vbnet;
    default:
      break;
  }
}
