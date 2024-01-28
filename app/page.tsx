import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link href="/">خانه</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
