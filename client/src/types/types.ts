/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  image?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Langs';
  level: number; // 0-100
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'Education' | 'Experience';
}
