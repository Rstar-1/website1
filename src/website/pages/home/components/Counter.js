import React from 'react'

const Counter = () => {
  return (
    <div className="relative bg-f8faff count-img">
      <img
        src="https://html.creativegigstf.com/charles/images/home/pattern.png"
        alt="count"
        className="w-full count-img object-contain"
      />
      <div className="absolute top-0 text-left left-0 flex items-center count-img">
        <div className="flex items-center justify-center container mx-auto">
          <div className="w-full text-center">
            <p className="textdark font-600 mbpx1 fsize20 sm-fsize15">
              COMPANY SUCCESS
            </p>
            <h3 className="textprimary font-800 sm-font-400 mtpx9 sm-mtpx6 leading mbpx1 fsize35 sm-fsize20">
              Some fun facts about our consulting
            </h3>
            <div className="flex justify-around mtpx50 mbpx50">
              <div className="mlpx5 mrpx5">
                <h4 className="fsize70 mtpx1 mbpx1 textprimary font-300">
                  40<sub className="fsize20">%</sub>
                </h4>
                <p className="text-gray fsize14 mtpx12">Years of Excellence</p>
              </div>
              <div className="mlpx5 mrpx5">
                <h4 className="fsize70 mtpx1 mbpx1 textprimary font-300">
                  100<sub className="fsize20">%</sub>
                </h4>
                <p className="text-gray fsize14 mtpx12">Client Satisfaction</p>
              </div>
              <div className="mlpx5 mrpx5">
                <h4 className="fsize70 mtpx1 mbpx1 textprimary font-300">
                  80<sub className="fsize20">%</sub>
                </h4>
                <p className="text-gray fsize14 mtpx12">Cases Completed</p>
              </div>
              <div className="mlpx5 mrpx5">
                <h4 className="fsize70 mtpx1 mbpx1 textprimary font-300">
                  20<sub className="fsize20">%</sub>
                </h4>
                <p className="text-gray fsize14 mtpx12">Consultants</p>
              </div>
            </div>
            <button className="border-0 cursor-pointer font-500 bgprimary textwhite rounded-5 ptpx12 pbpx12 sm-ptpx6 sm-pbpx6 sm-plpx20 sm-prpx20 plpx35 prpx35 mtpx20 fsize17 sm-fsize13">
              Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter
