import {
  faFileArchive,
  faFileAudio,
  faFileCsv,
  faFileExcel,
  faFileImage,
  faFilePdf,
  faFilePowerpoint,
  faFileVideo,
  faFileWord,
  faFile
} from "@fortawesome/free-solid-svg-icons";

export default filetype => {
  if (filetype === "pdf") return faFilePdf;
  if (["zip", "tar", "rar", "7z"].includes(filetype)) return faFileArchive;
  if (filetype === "doc" || filetype === "docx") return faFileWord;
  if (filetype === "ppt" || filetype === "ppx") return faFilePowerpoint;
  if (["xlsx", "xlsm", "xltx", "xltm"].includes(filetype)) return faFileExcel;
  if (filetype === "csv") return faFileCsv;

  if (["wav", "mp3", "aif", "wma", "flac"].includes(filetype))
    return faFileAudio;

  if (["tiff", "jpeg", "jpg", "bmp", "tga", "png", "gif"].includes(filetype))
    return faFileImage;

  if (
    [
      "mp4",
      "avi",
      "mov",
      "flv",
      "swf",
      "wmv",
      "m4p",
      "m4v",
      "mpv",
      "mp2",
      "mpg",
      "webm"
    ].includes(filetype)
  )
    return faFileVideo;

  return faFile;
};
