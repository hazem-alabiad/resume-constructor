import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

/**
 * @param {object} props
 * @param {string} props.keyword
 * @param {object} props.vars
 * @returns {string}
 */
const WithTrans = ({ keyword, vars }) => {
  const { t } = useTranslation();
  return t(keyword, vars);
};

export default WithTrans;

// ###################    Types    ##################
WithTrans.propTypes = {
  keyword: PropTypes.string.isRequired,
  vars: PropTypes.object,
};
