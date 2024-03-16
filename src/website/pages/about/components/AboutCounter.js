import React from 'react'

const AboutCounter = () => {
  return (
    <div className="ptpx50 pbpx50">
      <div className="container mx-auto">
        <div className="flex justify-around mtpx50 mbpx50">
          <div className="mlpx5 mrpx5">
            <h4 className="fsize60 mtpx1 mbpx1 textprimary font-300">
              40<sub className="fsize20">%</sub>
            </h4>
            <p className="text-gray fsize16 mtpx12">Years of Excellence</p>
          </div>
          <div className="mlpx5 mrpx5">
            <h4 className="fsize60 mtpx1 mbpx1 textprimary font-300">
              100<sub className="fsize20">%</sub>
            </h4>
            <p className="text-gray fsize16 mtpx12">Client Satisfaction</p>
          </div>
          <div className="mlpx5 mrpx5">
            <h4 className="fsize60 mtpx1 mbpx1 textprimary font-300">
              80<sub className="fsize20">%</sub>
            </h4>
            <p className="text-gray fsize16 mtpx12">Cases Completed</p>
          </div>
          <div className="mlpx5 mrpx5">
            <h4 className="fsize60 mtpx1 mbpx1 textprimary font-300">
              20<sub className="fsize20">%</sub>
            </h4>
            <p className="text-gray fsize16 mtpx12">Consultants</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCounter
