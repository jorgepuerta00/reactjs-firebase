import React from 'react'

interface IModal {
  title: string,
  data: any,
  isLoading: boolean,
  visible: boolean,
  onClose: any
}

const Modal: React.FC<IModal> = ({
  title,
  data,
  isLoading,
  visible,
  onClose
}) => {

  const onPress = () => onClose && onClose()

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
    <>
      {visible &&
        <div className="fixed z-10 inset-0 overflow-y-auto z-50">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 bg-opacity-10"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-min " role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 capitalize" id="modal-headline">
                        {title}
                      </h3>
                      <a href="#" onClick={() => onPress()} className="absolute right-5 top-5 block mb-1 text-sm font-normal hover:text-gray-400">X</a>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                    {!isLoading && mappingData().map((data: any) => (
                      <div className={"flex flex-row items-center flex-wrap"} key={data.key}>
                        <a className="block mb-1 text-sm font-normal hover:text-blue-600">{data.key}</a>
                        <a className="block mb-1 text-sm font-normal text-gray-300 pl-2 ordinal">{data.docCount}</a>
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </>
  );
};

export default Modal;