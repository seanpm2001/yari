import { useLocale } from "../../../hooks";
import { MDN_PLUS_SUBSCRIBE_MONTHLY_URL } from "../../../constants";

import "./index.scss";
import { Button } from "../button";

/**
 *
 * @param {boolean} toFXA - Whether this link goes to FXA, ot `/plus`
 * @returns {JSX.Element} - The anchor link with the appropriate URL
 */
export const SubscribeLink = ({ toFXA = false }: { toFXA?: boolean }) => {
  const locale = useLocale();
  const endPoint = toFXA ? MDN_PLUS_SUBSCRIBE_MONTHLY_URL : `/${locale}/plus`;

  return (
    <Button href={endPoint} extraClasses="mdn-plus-subscribe-link">
      Get MDN Plus
    </Button>
  );
};