import Link from "next/link";
import "../app/assets/styles/global.scss";
import Meta from "../app/utils/meta/Meta";

export default function Custom404() {
  return (
    <div className="layout">
      <Meta title="Page not found" description="This page not found">
        <div className="container__error">
          <p className="error">404 - Page not found</p>
          <Link href="/">
            <button className="button">Back to home</button>
          </Link>
        </div>
      </Meta>
    </div>
  );
}
