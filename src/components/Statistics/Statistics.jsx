import React from 'react';
import { StaticList, DescrStatistics } from './Statistics.styled';
import { Notification } from '../Notification/Notification';
import {
  MdThumbUpOffAlt,
  MdThumbDownOffAlt,
  MdSentimentNeutral,
  MdOutlineSummarize,
  MdPercent,
} from 'react-icons/md';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage,
}) => {
  return total ? (
    <StaticList>
      <li>
        <DescrStatistics>
          <MdThumbUpOffAlt size="14" />
          Good: {good}
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <MdSentimentNeutral size="14" />
          Neutral: {neutral}
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <MdThumbDownOffAlt size="14" />
          Bad: {bad}
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <MdOutlineSummarize size="14" />
          Total: {total}
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          <MdPercent size="14" />
          Positive feedback: {positivePercentage}%
        </DescrStatistics>
      </li>
    </StaticList>
  ) : (
    <Notification msg="There is no feedback" />
  );
};
