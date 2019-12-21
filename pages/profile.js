import Layout from "../components/layout";

function Profile() {
  return (
    <Layout>
      <form>
        <label>User Name</label>
        <input type="text" value="MyUserName" />
      </form>
    </Layout>
  );
}

export default Profile;
