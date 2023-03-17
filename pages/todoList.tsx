import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const todoList = () => {
  const [data, setData] = useState({
    name: "",
    enroll: "",
    desc: "",
  });
  const [getId, setGetId] = useState();

  const [getData, setGetData] = useState([]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8081/",
    }).then((data) => {
      console.log("data axios get", data.data.data);
      setGetData(data.data.data);
    });
  }, []);

  const onSubmit = () => {
    console.log("data", data);
    axios({
      method: "POST",
      url: "http://localhost:8081/",
      data: {
        data,
      },
    }).then(() => {
      setData({
        name: "",
        enroll: "",
        desc: "",
      });
      axios({
        method: "GET",
        url: "http://localhost:8081/",
      }).then((data) => {
        console.log("data axios get", data.data.data);
        setGetData(data.data.data);
      });
    });
  };

  const onDelete = (id: any) => {
    axios({
      method: "DELETE",
      url: `http://localhost:8081/${id}`,
    }).then((data) => {
      console.log("data axios get on delete", data);
      axios({
        method: "GET",
        url: "http://localhost:8081/",
      }).then((data) => {
        console.log("data axios get", data.data.data);
        setGetData(data.data.data);
      });
    });
  };

  const onEditItem = (item: any) => {
    setGetId(item.id);
    setData({
      name: item.data.name,
      enroll: item.data.enroll,
      desc: item.data.desc,
    });
  };

  const onEditData = () => {
    axios({
      method: "PATCH",
      url: `http://localhost:8081/${getId}`,
      data: {
        data,
      },
    }).then((data) => {
      console.log("data axios get patch", data);
      axios({
        method: "GET",
        url: "http://localhost:8081/",
      }).then((data) => {
        console.log("data axios get", data.data.data);
        setGetData(data.data.data);
        setData({
          name: "",
          enroll: "",
          desc: "",
        });
        setGetId();
      });
    });
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", padding: "20px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Todo List
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <TextField
            id="outlined-basic"
            sx={{ margin: "10px" }}
            onChange={handleChange}
            name="name"
            value={data.name}
            label="Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Enrollment Number"
            onChange={handleChange}
            name="enroll"
            value={data.enroll}
            variant="outlined"
            sx={{ margin: "10px" }}
          />

          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            onChange={handleChange}
            name="desc"
            value={data.desc}
            sx={{ margin: "10px" }}
            placeholder="Description..."
          />
        </Box>
        <Box sx={{ padding: "10px", display: "flex", gap: "10px" }}>
          <Button
            variant="contained"
            onClick={onSubmit}
            sx={{ fontSize: "15px", width: "10%" }}
          >
            Submit
          </Button>

          <Button
            variant="contained"
            onClick={() => onEditData()}
            sx={{ fontSize: "15px", width: "10%" }}
            disabled={getId === undefined ? true : false}
          >
            Edit
          </Button>
        </Box>

        <Box sx={{ marginTop: "30px", gap: "10px" }}>
          {getData.map((item, ind) => {
            if (item.id > 7) {
              return (
                <Box
                  key={ind}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                  }}
                >
                  <Typography variant="h4">id : {item.id}</Typography>

                  <Typography variant="h4">Name : {item.data.name}</Typography>

                  <Typography variant="h4">
                    {" "}
                    Enroll No. : {item.data.enroll}
                  </Typography>

                  <Typography variant="h4">
                    {" "}
                    description : {item.data.desc}
                  </Typography>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <Button
                      variant="contained"
                      onClick={() => onDelete(item.id)}
                      sx={{ fontSize: "15px", width: "10%" }}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ fontSize: "15px", width: "10%" }}
                      onClick={() => onEditItem(item)}
                    >
                      edit
                    </Button>
                  </Box>
                </Box>
              );
            }
          })}
        </Box>
      </Box>
    </>
  );
};

export default todoList;
