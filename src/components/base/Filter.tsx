import React from 'react';
import Modal from './Modal';
import { IErrorResponse } from "./Types";
import styles from '../../styles/Home.module.css'

interface IFilter {
  title: string,
  data: any,
  isLoading: boolean,
  error?: IErrorResponse
}

const Filter: React.FC<IFilter> = ({
  title,
  data,
  isLoading,
  error
}) => {

  const [modalVisible, setModalVisible] = React.useState(false);

  const mappingData = () => {	
    let mapped: any = [];
    for (let [key, value] of Object(data) ) {
      mapped.push({
        key: value.key,
        doc_count: value.doc_count.toLocaleString()
      });
    }
    return mapped;
  };

  return (
    <div className={styles.card}>
      <a href="#" onClick={() => setModalVisible(true)} className="font-semibold hover:text-blue-600 uppercase">{title}</a>
      {!isLoading && mappingData().map((data: any) => (
        <div className={"flex flex-row items-center flex-wrap"} key={data.key}>
          <a href="#" className="block mb-1 text-sm font-normal hover:text-blue-600">{data.key}</a>
          <a className="block mb-1 text-sm font-normal text-gray-300 pl-2 ordinal">{data.doc_count}</a>
        </div>
      ))}
      <Modal visible={modalVisible} title={title} data={data} isLoading={isLoading} onClose={() => setModalVisible(false)} />
    </div>
  );
};

export default Filter;