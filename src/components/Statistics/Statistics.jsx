import React from 'react';
import { Icons } from '../../Utils/Icons';
import { StaticList, DescrStatistics } from './Statistics.styled';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return total ? (
    <StaticList>
      <li>
        <DescrStatistics>
          <Icons.good size="14" />
          Good: <span>{good}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <Icons.neutral size="14" />
          Neutral: <span>{neutral}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <Icons.bad size="14" />
          Bad: <span>{bad}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <Icons.total size="14" />
          Total: <span>{total}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <Icons.positivePercentage size="14" />
          Positive feedback: <span>{positivePercentage}%</span>
        </DescrStatistics>
      </li>
    </StaticList>
  ) : (
    <Notification msg="There is no feedback" />
  );
};
