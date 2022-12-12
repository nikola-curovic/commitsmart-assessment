const Loading = ({ show }: { show: boolean }) => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ zIndex: "-1", opacity: show ? "100" : "0" }}
    >
      <img src="/images/loading.gif" alt="loading" />
    </div>
  );
};

export default Loading;
