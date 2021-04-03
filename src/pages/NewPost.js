import styled from "@emotion/styled"
import FormField from "../components/UI/FormField"
import travel5 from "../assets/images/travel5.png"
import { useDispatch } from "react-redux"
import { fetchCreatePost } from "../features/post/postSlice";

export default function NewPost() {
  const dispatch = useDispatch();

  return (
    <StyledForm onSubmit={(e)=>{
      e.preventDefault();
      const form = e.target;
      const { title, description, category, location ,cover, main, last } = form;
      console.log()

      const formData = new FormData();
      formData.append("title", title.value);
      formData.append("body",description.value);
      formData.append("department_id", category.value)
      formData.append("location", location.value)
      formData.append("cover", cover.files[0], cover.value);
      formData.append("main", main.files[0], main.value);
      formData.append("last", last.files[0], last.value);
      dispatch(fetchCreatePost(formData))
    }}>
      <StyledDiv1>
        <h1>New Post</h1>
        <FormField size={"100%"}>
          <label>Title</label>
          <input type="text" name="title" />
        </FormField>
        <FormField size={"100%"}>
          <label>Category</label>
          <input type="text" name="category"/>
        </FormField>
        <FormField size={"100%"}>
          <label>Location</label>
          <input type="text" name="location"/>
        </FormField>
        <FormField size={"100%"}>
          <label>Description</label>
          <textarea name="description" />
        </FormField>
      </StyledDiv1>
      <StyledDiv2>
        <img src={travel5} alt="" />
        <div>
        <FormField size={"100%"}>
          <label>Cover post</label>
          <input type="file" name="cover" multiple/>
        </FormField>
        <FormField size={"100%"}>
          <label>Main image</label>
          <input type="file" name="main"/>
        </FormField>
        <FormField size={"100%"}>
          <label>Last image</label>
          <input type="file" name="last"/>
        </FormField>
        <button type="submit">New Post</button>
        </div>
      </StyledDiv2>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  padding: 34px;
`;
const StyledDiv1 = styled.div`
  width: 50%;
  & > div > textarea {
    height: 500px;
  }
`;
const StyledDiv2 = styled.div`
  padding-top: 30px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  & > div > div {
    margin-top: 8px;
  }
  & > div > button {
    float: right;
    margin-top: 8px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
    padding: 8px 16px;
    background: #b7b7a4;
    border-radius: 16px;
    border: 1px transparent;
  }
`;
