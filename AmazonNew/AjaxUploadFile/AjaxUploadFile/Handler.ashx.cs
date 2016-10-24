using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;

namespace AjaxUploadFile
{
    /// <summary>
    /// Handler 的摘要说明
    /// </summary>
    public class Handler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            var f1 = context.Request.Files["File"];
            var type = context.Request["Type"];
            var storeAcount = context.Request["StoreAcount"];
            String fileExt = System.IO.Path.GetExtension(f1.FileName);
            f1.SaveAs(context.Server.MapPath(f1.FileName));
            var strList=CSVUtil.ReadCsv(context.Server.MapPath(f1.FileName));
            context.Response.Write("Hello World");
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
    public class CSVUtil
    {
        private CSVUtil()
        {
        }
        public static List<String[]> ReadCsv(string filePathName)
        {
            var ls = new List<String[]>();
            var fileReader=new StreamReader(filePathName,Encoding.Default);  
            string strLine="";
            while (strLine != null)
            {
                strLine = fileReader.ReadLine();
                if (!string.IsNullOrEmpty(strLine))
                {
                    ls.Add(strToAry(strLine));
                    //Debug.WriteLine(strLine);
                }
            } 
            fileReader.Close();
            return ls;
        }
        private static string[] strToAry(string strLine)
        {
            string strItem = "";
            int iFenHao = 0;
            var lstStr = new System.Collections.ArrayList();

            for (int i = 0; i < strLine.Length; i++)
            {
                string strA = strLine.Substring(i, 1);

                if (strA == "\"")
                {
                    iFenHao = iFenHao + 1;
                }

                if (iFenHao == 2)
                {
                    iFenHao = 0;
                }

                if (strA == "," && iFenHao == 0)
                {
                    lstStr.Add(strItem);
                    strItem = "";
                }
                else
                {
                    strItem = strItem + strA;
                }
            }

            if (strItem.Length > 0)
                lstStr.Add(strItem);

            return (String[])lstStr.ToArray(typeof(string));
        }
        
    }
}