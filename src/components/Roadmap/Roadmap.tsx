'use client'

import React, {useState} from 'react';
import classNames from "classnames";
import {motion} from 'framer-motion';
import {Syne} from 'next/font/google'

import classes from './Roadmap.module.scss'
import {tableData} from "@/components/Roadmap/constants";

const syne = Syne({subsets: ['latin']})

interface RoadmapProps {

}

export const Roadmap: React.FC<RoadmapProps> = (props) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const handleRowClick = (index: number) => {
    const currentExpanded = expandedRows.includes(index);
    if (currentExpanded) {
      setExpandedRows(expandedRows.filter((item) => item !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };

  return (
    <div className={classes.roadmap}>
      <div className={'container'}>
        <table className={classNames(['table', classes.table, syne.className])}>
          <thead className={'table_header'}>
          <tr className={classNames(['table_row', classes.tableRow])}>
            <th className={classNames(['table_cell', classes.tableCell])}>
              Compare Plans
            </th>
            <th className={classNames(['table_cell', classes.tableCell])}>
              Starter Plan
            </th>
            <th className={classNames(['table_cell', classes.tableCell])}>
              Advanced Plan
            </th>
            <th className={classNames(['table_cell', classes.tableCell])}>
              Custom Plan
            </th>
          </tr>
          </thead>
          <tbody className={classNames(['table_body', classes.tableBody])}>
          {tableData.map((row, index) => {
            return (
              <React.Fragment key={index}>
                <tr
                  className={classNames(['table_row', classes.tableRow, {[classes.even]: index % 2 === 0}])}
                  onClick={() => handleRowClick(index)}
                >
                  <td className={classNames(['table_cell', classes.tableCell])}>
                    Hyper is the powerful calendar app for Mac OS that helps you stay organized and on top of your busy
                    schedule.
                  </td>
                  <td className={classNames(['table_cell', classes.tableCell])}>
                    1000/month
                  </td>
                  <td className={classNames(['table_cell', classes.tableCell])}>
                    10.000/month
                  </td>
                  <td className={classNames(['table_cell', classes.tableCell])}>
                    Unlimited
                  </td>
                </tr>
                {/*Collapse*/}
                <tr className={classNames(['table_row', classes.tableRow])}>
                  <td colSpan={4}>
                    <motion.div
                      initial={false}
                      animate={{height: expandedRows.includes(index) ? "auto" : 0}}
                      transition={{duration: 0.3}}
                      style={{overflow: "hidden"}}
                    >
                      <div
                        className={classes.content}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam asperiores autem
                        consequatur cum eaque id illo illum iusto nihil porro quidem quis ratione recusandae, sint
                        temporibus voluptas voluptate voluptatum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam asperiores autem
                        consequatur cum eaque id illo illum iusto nihil porro quidem quis ratione recusandae, sint
                        temporibus voluptas voluptate voluptatum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam asperiores autem
                        consequatur cum eaque id illo illum iusto nihil porro quidem quis ratione recusandae, sint
                        temporibus voluptas voluptate voluptatum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam asperiores autem
                        consequatur cum eaque id illo illum iusto nihil porro quidem quis ratione recusandae, sint
                        temporibus voluptas voluptate voluptatum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam asperiores autem
                        consequatur cum eaque id illo illum iusto nihil porro quidem quis ratione recusandae, sint
                        temporibus voluptas voluptate voluptatum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam asperiores autem
                        consequatur cum eaque id illo illum iusto nihil porro quidem quis ratione recusandae, sint
                        temporibus voluptas voluptate voluptatum!
                      </div>
                    </motion.div>
                  </td>
                </tr>
              </React.Fragment>
            )
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
