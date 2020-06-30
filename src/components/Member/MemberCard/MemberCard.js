import React from 'react';
import {Card, Col} from 'antd';
import 'antd/dist/antd.css';

import style from '../../../Style/Style'

const { Meta } = Card;

const MemberCard = ( cUser ) => {
  const member = cUser.currentUser;

  return (
    <React.Fragment>
      <Col span={4} style={{'marginBottom':'20px', 'minWidth':'33%', 'maxHeight':'80vw'}} xs={24} sm={12} md={8} lg={8} xl={4}>
        <Card title={member.name} style={style.cardStyle}hoverable={true}>
          <Meta style={style.metaStyle} description={`Departamento: ${member.department}`}/>
          <Meta style={style.metaStyle} description={`Email: ${member.email}`}/>
        </Card>
      </Col>
    </React.Fragment>
  );
}

export default MemberCard;