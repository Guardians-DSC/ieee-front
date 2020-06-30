import React from 'react';
import {Card, Col} from 'antd';
import 'antd/dist/antd.css';

import style from '../../../Style/Style'

const { Meta } = Card;

const NucleCard = ( cNucle ) => {
  const nucle = cNucle.currentNucle;

  return (
    <React.Fragment>
      <Col span={4} style={{'marginBottom':'20px', 'minWidth':'33%', 'maxHeight':'80vw'}} xs={24} sm={12} md={8} lg={8} xl={4}>
        <Card title={nucle.name} style={style.cardStyle}hoverable={true}>
          <Meta style={style.metaStyle} description={`(Quais informações colocar?)`}/>
        </Card>
      </Col>
    </React.Fragment>
  );
}

export default NucleCard;