import Layout from "../components/layout";

function Profile() {
  return (
    <Layout>
      <form>
        <label>User Name: </label>
        <input type="text" value="MyUserName" />
        <br />
        <label>Email: </label>
        <input type="text" value="MyEmail" />
      </form>

      <style jsx>{`
        form {
          padding: 25px;
          border: 1px solid #ddd;
        }
      `}</style>
    </Layout>
  );
}

export default Profile;
