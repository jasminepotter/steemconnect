import React, { PropTypes } from 'react';
import { FormattedNumber } from 'react-intl';
import { Badge } from 'antd';
import Avatar from '../../../widgets/Avatar';
import './TransferDelegate.less';

const SignPlaceholderDefault = ({
  query,
}) => {
  const [amount, symbol] = query.amount.split(' ');
  return (
    <div className="Placeholder__operation-content">
      <div className="TransferInfo">
        <div className="TransferInfo__accounts">
          <div className="TransferInfo__account">
            <Avatar username={query.fromName} size="60" className="TransferInfo__avatar" />
            <br />
            <span className="TransferInfo__username">
              {query.fromName || 'You'}
            </span>
            <span className="TransferInfo__dots" />
          </div>
          <div className="TransferInfo__account">
            <span className="TransferInfo__dots" />
            <Avatar username={query.toName} size="60" className="TransferInfo__avatar" />
            {query.toReputation && <span className="TransferInfo__reputation"><Badge count={query.toReputation} style={{ backgroundColor: '#1A5099' }} /></span>}
            <br />
            <span className="TransferInfo__username">
              {query.toName}
            </span>
          </div>
        </div>
        <strong>
          <FormattedNumber
            value={amount}
            currency="USD"
            minimumFractionDigits={3}
            maximumFractionDigits={3}
          /> {symbol}
        </strong>
        {query.memo && <span className="Placeholder__memo">{query.memo}</span>}
      </div>
    </div>
  );
};

SignPlaceholderDefault.propTypes = {
  query: PropTypes.shape(),
};

export default SignPlaceholderDefault;