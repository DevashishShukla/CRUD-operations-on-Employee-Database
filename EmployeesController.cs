using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EmployeeDataAccess;
namespace EmployeeServices.Controllers
{
    public class EmployeesController : ApiController
    {
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            using (EmployeeDBEntities entities = new EmployeeDBEntities())
            {
                return entities.Employees.ToList();
            }
        }
       [HttpGet]
        public Employee Get(String username)
        {
            using (EmployeeDBEntities entities = new EmployeeDBEntities())
            {
                return entities.Employees.FirstOrDefault(e => (e.username == username));
            }
        }
        [HttpPost]
        public HttpResponseMessage Post([FromBody]Employee employee)
        {
                try
                   {
                using (EmployeeDBEntities entities = new EmployeeDBEntities())
                {
                    entities.Employees.Add(employee);
                    entities.SaveChanges();
                    var message = Request.CreateResponse(HttpStatusCode.Created, employee);
                    message.Headers.Location = new Uri(Request.RequestUri + employee.username);
                    return message;


                }
            }
                catch(Exception e)
                {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest,e);
                }
      
        }
        [HttpDelete]
        public HttpResponseMessage Delete(string username,string password)
        {
            try
            {

                using (EmployeeDBEntities entities = new EmployeeDBEntities())
                {
                    var entity = entities.Employees.First(e => ((e.username == username) && (e.password==password) ));
                    if (entity == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Employee not found");
                    }
                    else
                    {
                        entities.Employees.Remove(entity);
                        entities.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK);
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
            
        }
        [HttpPut]
        public HttpResponseMessage Put([FromBody]Employee employee)
        {
            try
            {
               
                using (EmployeeDBEntities entities = new EmployeeDBEntities())
                {
                    var entity = entities.Employees.First(e => (e.username == employee.username));
                    if (entity == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Employee not found");
                    }
                    else
                    {
                        entity.Employee_name= employee.Employee_name;
                        entity.Employee_age = employee.Employee_age;
                        entity.password = employee.password;
                        entities.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK);
                    }
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
