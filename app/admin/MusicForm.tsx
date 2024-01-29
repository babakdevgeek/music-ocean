const MusicForm = () => {
  return (
    <div className="card shadow-2xl max-w-md p-4">
      <form action="" className="mt-12 w-full">
        <label className="form-control gap-4 m-auto w-full">
          <div className="label p-0 m-0 ">
            <span className="label-text">
              نام اهنگ به فارسی جهت نمایش در سایت
            </span>
          </div>
          <input type="text" className="w-full input-primary input input-sm" />
          <div className="label p-0 m-0 ">
            <span className="label-text">
              نام اهنگ به انگلیسی جهت نمایش در url
            </span>
          </div>
          <input type="text" className="w-full input-primary input input-sm" />
          <div className="label p-0 m-0">
            <span className="label-text">فایل آهنگ</span>
          </div>
          <input
            type="file"
            className="w-full file-input file-input-primary "
          />
          <div className="label p-0 m-0">
            <span className="label-text">
              نام فارسی خواانده جهت نمایش در سایت
            </span>
          </div>
          <input type="text" className="w-full input-primary input input-sm" />
          <div className="label p-0 m-0">
            <span className="label-text">
              نام انگلیسی خواانده جهت نمایش در url
            </span>
          </div>
          <input type="text" className="w-full input-primary input input-sm" />
          <div className="label p-0 m-0">
            <span className="label-text">
              {" "}
              نام دسته بندی به فارسی جهت نمایس در سایت
            </span>
          </div>
          <input type="text" className="input-primary input input-sm" />
          <div className="label p-0 m-0">
            <span className="label-text">
              {" "}
              نام دسته بندی به انگلیسی جهت نمایش در url
            </span>
          </div>
          <input type="text" className="input-primary input input-sm" />
          <button className="btn btn-primary self-center">افزودن</button>
        </label>
      </form>
    </div>
  );
};

export default MusicForm;
