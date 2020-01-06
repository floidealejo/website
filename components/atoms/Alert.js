import PropTypes from 'prop-types'
import classNames from 'classnames'

import { choices } from '../../utils/designTokens'

const Alert = ({ children, type }) => (
  <>
    <div className={classNames('alert', { [`alert-${type}`]: type })}>
      {children}
    </div>
    <style jsx>{`
      .alert {
        display: inline-flex;
        align-items: center;
        padding: ${choices.spacing[2]} ${choices.spacing[4]};
        border-radius: ${choices.borderRadius.md};
        height: ${choices.minHeight.full};
        margin: ${choices.spacing[2]} ${choices.spacing[4]}
          ${choices.spacing[16]};
      }

      .alert-info {
        background: ${choices.colors.blue[200]};
        border: 1px solid ${choices.colors.blue[400]};
        color: ${choices.colors.blue[400]};
      }

      .alert-danger {
        background: ${choices.colors.red[200]};
        border: 1px solid ${choices.colors.red[400]};
        color: ${choices.colors.red[400]};
      }
    `}</style>
  </>
)

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string
}

Alert.defaultProps = {
  type: 'info'
}

export default Alert
