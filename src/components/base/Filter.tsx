import React from 'react';
import Modal from './Modal';
import styles from '../../styles/Home.module.css'

interface IFilter {
  title: string,
  data: any,
  isLoading: boolean,
  OnPress?: any
}

const Filter: React.FC<IFilter> = ({
  title,
  data,
  isLoading,
  OnPress
}) => {

  const [modalVisible, setModalVisible] = React.useState(false);

  const setFilter = (filter: string) => OnPress && OnPress(filter)

  const mappingData = () => {	
    let mapped: any = [];
    for (let [key, value] of Object(data) ) {
      mapped.push({
        key: value.key,
        docCount: value.docCount.toLocaleString()
      });
    }
    return mapped;
  };

  return (
    <div className={styles.card}>
      <a href="#" onClick={() => setModalVisible(true)} className="font-semibold hover:text-blue-600 uppercase">{title}</a>
      {!isLoading && mappingData().map((data: any) => (
        <div className={"flex flex-row items-center flex-wrap"} key={data.key}>
          <a href="#" onClick={() => setFilter(data.key)} className="block mb-1 text-sm font-normal hover:text-blue-600">{data.key}</a>
          <a className="block mb-1 text-sm font-normal text-gray-300 pl-2 ordinal">{data.docCount}</a>
        </div>
      ))}
      <Modal visible={modalVisible} title={title} data={data} isLoading={isLoading} onClose={() => setModalVisible(false)} />
    </div>
  );
};

export default Filter;