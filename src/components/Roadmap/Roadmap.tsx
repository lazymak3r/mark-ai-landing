'use client'

import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import {Syne} from 'next/font/google'
import {motion} from 'framer-motion';
import {BsChevronRight} from "react-icons/bs";

import axios from "@/config/axios";
import classes from './Roadmap.module.scss'
import {Loading} from "@/components/Loading/Loading";
import {RoadMapData, tableData} from "@/components/Roadmap/constants";
import {addData, getAllData, getItemById, updateItemById} from "@/config/IndexedDB";

const syne = Syne({subsets: ['latin']})

interface RoadmapProps {

}

export const Roadmap: React.FC<RoadmapProps> = (props) => {
  const [processing, setProcessing] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<any[]>([])
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const handleRowClick = (index: number) => {
    const currentExpanded = expandedRows.includes(index);
    if (currentExpanded) {
      setExpandedRows(expandedRows.filter((item) => item !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };

  const getDataFromIndexDb = async () => {
    try {
      setLoading(true)
      const data = await getAllData('roadmap')
      setData(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const onCheckHandler = async (isChecked: boolean, row: RoadMapData, name: string) => {
    try {
      setProcessing(true)
      const item = await getItemById('roadmap', row.id)
      if (item) {
        // Update item
        await updateItemById('roadmap', row.id, {
          ...item,
          id: row.id,
          name: row.name,
          [name]: isChecked
        });
        await axios.post('/roadmap-vote', {
          id: row.id,
          variant: name,
          dir: isChecked
        })
      } else {
        // Create item
        await addData('roadmap', {
          id: row.id,
          name: row.name,
          [name]: isChecked
        });
        await axios.post('/roadmap-vote', {
          id: row.id,
          variant: name,
          dir: isChecked
        })
      }
      setProcessing(false)
    } catch (error) {
      console.log(error)
      setProcessing(false)
    }
  }

  useEffect(() => {
    getDataFromIndexDb()
  }, [])

  if (loading) {
    return (<div className={classes.loadingContainer}>
        <Loading/>
      </div>
    )
  }

  return (
    <div className={classes.roadmap}>
      <div className={'container'}>
        <p className={classes.roadmapSectionTitle}>
          Help us create the perfect app for you. Share your preferred features and needs as we prepare to launch our
          exciting beta version
        </p>
        <table className={classNames(['table', classes.table, syne.className])}>
          <thead className={'table_header'}>
          <tr className={classNames(['table_row', classes.tableRow])}>
            <th className={classNames(['table_cell', classes.tableCell])}>
              Description
            </th>
            <th className={classNames(['table_cell', classes.tableCell])}>
              I would be interested
            </th>
            <th className={classNames(['table_cell', classes.tableCell])}>
              I would pay for this
            </th>
          </tr>
          </thead>
          <tbody className={classNames(['table_body', classes.tableBody])}>
          {tableData.map((row, index) => {
            const rowFromDb = data.find((r: any) => r.id === row.id)
            return (
              <React.Fragment key={index}>
                <tr
                  className={classNames(['table_row', classes.tableRow, {[classes.even]: index % 2 === 0}])}
                  onClick={() => handleRowClick(index)}
                >
                  <td className={classNames(['table_cell', classes.tableCell])}>
                    <div className={classes.firstCell}>
                      <span
                        className={classNames([classes.arrow, {[classes.opened]: expandedRows.includes(index)}])}><BsChevronRight/></span>
                      <span className={classes.firstCellTitle}>{row.title}</span>
                    </div>
                  </td>
                  <td className={classNames(['table_cell', classes.tableCell])}>
                    <input
                      type={'checkbox'}
                      name={row.name}
                      defaultChecked={rowFromDb?.wouldInterested}
                      onClick={(e) => {
                        e.stopPropagation()
                        onCheckHandler((e.target as HTMLInputElement).checked, row, 'wouldInterested')
                      }}
                    />
                  </td>
                  <td className={classNames(['table_cell', classes.tableCell])}>
                    <input
                      type={'checkbox'}
                      name={row.name}
                      defaultChecked={rowFromDb?.wouldPay}
                      onClick={(e) => {
                        e.stopPropagation()
                        onCheckHandler((e.target as HTMLInputElement).checked, row, 'wouldPay')
                      }}
                    />
                  </td>
                </tr>
                {/*Collapse*/}
                <tr className={classNames(['table_row', classes.tableRow, classes.collapse])}>
                  <td colSpan={4}>
                    <motion.div
                      initial={false}
                      animate={{height: expandedRows.includes(index) ? "auto" : 0}}
                      transition={{duration: 0.3}}
                      style={{overflow: "hidden"}}
                    >
                      <div className={classes.content}>{row.description}</div>
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
