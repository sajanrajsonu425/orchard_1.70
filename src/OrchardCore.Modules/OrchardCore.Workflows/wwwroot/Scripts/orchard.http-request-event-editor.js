/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

///<reference path="../../../Assets/Lib/jquery/typings.d.ts" />
$(function () {
  var generateWorkflowUrl = function generateWorkflowUrl() {
    var workflowTypeId = $('[data-workflow-type-id]').data('workflow-type-id');
    var activityId = $('[data-activity-id]').data('activity-id');
    var tokenLifeSpan = $('#token-lifespan').val();
    var generateUrl = $('[data-generate-url]').data('generate-url') + "?workflowTypeId=".concat(workflowTypeId, "&activityId=").concat(activityId, "&tokenLifeSpan=").concat(tokenLifeSpan);
    var antiforgeryHeaderName = $('[data-antiforgery-header-name]').data('antiforgery-header-name');
    var antiforgeryToken = $('[data-antiforgery-token]').data('antiforgery-token');
    var headers = {};
    headers[antiforgeryHeaderName] = antiforgeryToken;
    $.post({
      url: generateUrl,
      headers: headers
    }).done(function (url) {
      $('#workflow-url-text').val(url);
    });
  };
  $('#generate-url-button').on('click', function (e) {
    generateWorkflowUrl();
  });
  if ($('#workflow-url-text').val() == '') {
    generateWorkflowUrl();
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtmbG93LXVybC1nZW5lcmF0b3IudHMiLCJ3b3JrZmxvdy11cmwtZ2VuZXJhdG9yLmpzIl0sIm5hbWVzIjpbIiQiLCJnZW5lcmF0ZVdvcmtmbG93VXJsIiwid29ya2Zsb3dUeXBlSWQiLCJkYXRhIiwiYWN0aXZpdHlJZCIsInRva2VuTGlmZVNwYW4iLCJ2YWwiLCJnZW5lcmF0ZVVybCIsImNvbmNhdCIsImFudGlmb3JnZXJ5SGVhZGVyTmFtZSIsImFudGlmb3JnZXJ5VG9rZW4iLCJoZWFkZXJzIiwicG9zdCIsInVybCIsImRvbmUiLCJvbiIsImUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQUEsQ0FBQyxDQUFDLFlBQUE7RUFDRSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFBLEVBQUc7SUFDeEIsSUFBTUMsY0FBYyxHQUFXRixDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ0csSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ3BGLElBQU1DLFVBQVUsR0FBV0osQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDdEUsSUFBSUUsYUFBYSxHQUFHTCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ00sR0FBRyxDQUFBLENBQUU7SUFDOUMsSUFBTUMsV0FBVyxHQUFXUCxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQ0csSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLGtCQUFBLENBQUFLLE1BQUEsQ0FBbUJOLGNBQWMsRUFBQSxjQUFBLENBQUEsQ0FBQU0sTUFBQSxDQUFlSixVQUFVLEVBQUEsaUJBQUEsQ0FBQSxDQUFBSSxNQUFBLENBQWtCSCxhQUFhLENBQUU7SUFDdkssSUFBTUkscUJBQXFCLEdBQVdULENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDRyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDekcsSUFBTU8sZ0JBQWdCLEdBQVdWLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDeEYsSUFBTVEsT0FBTyxHQUFRLENBQUEsQ0FBRTtJQUV2QkEsT0FBTyxDQUFDRixxQkFBcUIsQ0FBQyxHQUFHQyxnQkFBZ0I7SUFFakRWLENBQUMsQ0FBQ1ksSUFBSSxDQUFDO01BQ0hDLEdBQUcsRUFBRU4sV0FBVztNQUNoQkksT0FBTyxFQUFFQTtJQ0ZiLENER0MsQ0FBQyxDQUFDRyxJQUFJLENBQUMsVUFBQUQsR0FBRyxFQUFBO01BQ1BiLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDTSxHQUFHLENBQUNPLEdBQUcsQ0FBQztJQUNwQyxDQUFDLENBQUM7RUFDTixDQUFDO0VBRURiLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDZSxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFDLENBQUMsRUFBQTtJQUNuQ2YsbUJBQW1CLENBQUEsQ0FBRTtFQUN6QixDQUFDLENBQUM7RUFFRixJQUFJRCxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ00sR0FBRyxDQUFBLENBQUUsSUFBSSxFQUFFLEVBQUU7SUFDckNMLG1CQUFtQixDQUFBLENBQUU7RUNKekI7QURNSixDQUFDLENBQUMiLCJmaWxlIjoib3JjaGFyZC5odHRwLXJlcXVlc3QtZXZlbnQtZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vQXNzZXRzL0xpYi9qcXVlcnkvdHlwaW5ncy5kLnRzXCIgLz5cclxuXHJcbiQoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2VuZXJhdGVXb3JrZmxvd1VybCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCB3b3JrZmxvd1R5cGVJZDogc3RyaW5nID0gJCgnW2RhdGEtd29ya2Zsb3ctdHlwZS1pZF0nKS5kYXRhKCd3b3JrZmxvdy10eXBlLWlkJyk7XHJcbiAgICAgICAgY29uc3QgYWN0aXZpdHlJZDogc3RyaW5nID0gJCgnW2RhdGEtYWN0aXZpdHktaWRdJykuZGF0YSgnYWN0aXZpdHktaWQnKTtcclxuICAgICAgICB2YXIgdG9rZW5MaWZlU3BhbiA9ICQoJyN0b2tlbi1saWZlc3BhbicpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IGdlbmVyYXRlVXJsOiBzdHJpbmcgPSAkKCdbZGF0YS1nZW5lcmF0ZS11cmxdJykuZGF0YSgnZ2VuZXJhdGUtdXJsJykgKyBgP3dvcmtmbG93VHlwZUlkPSR7d29ya2Zsb3dUeXBlSWR9JmFjdGl2aXR5SWQ9JHthY3Rpdml0eUlkfSZ0b2tlbkxpZmVTcGFuPSR7dG9rZW5MaWZlU3Bhbn1gO1xyXG4gICAgICAgIGNvbnN0IGFudGlmb3JnZXJ5SGVhZGVyTmFtZTogc3RyaW5nID0gJCgnW2RhdGEtYW50aWZvcmdlcnktaGVhZGVyLW5hbWVdJykuZGF0YSgnYW50aWZvcmdlcnktaGVhZGVyLW5hbWUnKTtcclxuICAgICAgICBjb25zdCBhbnRpZm9yZ2VyeVRva2VuOiBzdHJpbmcgPSAkKCdbZGF0YS1hbnRpZm9yZ2VyeS10b2tlbl0nKS5kYXRhKCdhbnRpZm9yZ2VyeS10b2tlbicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnM6IGFueSA9IHt9O1xyXG5cclxuICAgICAgICBoZWFkZXJzW2FudGlmb3JnZXJ5SGVhZGVyTmFtZV0gPSBhbnRpZm9yZ2VyeVRva2VuO1xyXG5cclxuICAgICAgICAkLnBvc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGdlbmVyYXRlVXJsLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgfSkuZG9uZSh1cmwgPT4ge1xyXG4gICAgICAgICAgICAkKCcjd29ya2Zsb3ctdXJsLXRleHQnKS52YWwodXJsKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJCgnI2dlbmVyYXRlLXVybC1idXR0b24nKS5vbignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBnZW5lcmF0ZVdvcmtmbG93VXJsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoJCgnI3dvcmtmbG93LXVybC10ZXh0JykudmFsKCkgPT0gJycpIHtcclxuICAgICAgICBnZW5lcmF0ZVdvcmtmbG93VXJsKCk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9Bc3NldHMvTGliL2pxdWVyeS90eXBpbmdzLmQudHNcIiAvPlxuJChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdlbmVyYXRlV29ya2Zsb3dVcmwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3b3JrZmxvd1R5cGVJZCA9ICQoJ1tkYXRhLXdvcmtmbG93LXR5cGUtaWRdJykuZGF0YSgnd29ya2Zsb3ctdHlwZS1pZCcpO1xuICAgICAgICB2YXIgYWN0aXZpdHlJZCA9ICQoJ1tkYXRhLWFjdGl2aXR5LWlkXScpLmRhdGEoJ2FjdGl2aXR5LWlkJyk7XG4gICAgICAgIHZhciB0b2tlbkxpZmVTcGFuID0gJCgnI3Rva2VuLWxpZmVzcGFuJykudmFsKCk7XG4gICAgICAgIHZhciBnZW5lcmF0ZVVybCA9ICQoJ1tkYXRhLWdlbmVyYXRlLXVybF0nKS5kYXRhKCdnZW5lcmF0ZS11cmwnKSArIFwiP3dvcmtmbG93VHlwZUlkPVwiLmNvbmNhdCh3b3JrZmxvd1R5cGVJZCwgXCImYWN0aXZpdHlJZD1cIikuY29uY2F0KGFjdGl2aXR5SWQsIFwiJnRva2VuTGlmZVNwYW49XCIpLmNvbmNhdCh0b2tlbkxpZmVTcGFuKTtcbiAgICAgICAgdmFyIGFudGlmb3JnZXJ5SGVhZGVyTmFtZSA9ICQoJ1tkYXRhLWFudGlmb3JnZXJ5LWhlYWRlci1uYW1lXScpLmRhdGEoJ2FudGlmb3JnZXJ5LWhlYWRlci1uYW1lJyk7XG4gICAgICAgIHZhciBhbnRpZm9yZ2VyeVRva2VuID0gJCgnW2RhdGEtYW50aWZvcmdlcnktdG9rZW5dJykuZGF0YSgnYW50aWZvcmdlcnktdG9rZW4nKTtcbiAgICAgICAgdmFyIGhlYWRlcnMgPSB7fTtcbiAgICAgICAgaGVhZGVyc1thbnRpZm9yZ2VyeUhlYWRlck5hbWVdID0gYW50aWZvcmdlcnlUb2tlbjtcbiAgICAgICAgJC5wb3N0KHtcbiAgICAgICAgICAgIHVybDogZ2VuZXJhdGVVcmwsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHVybCkge1xuICAgICAgICAgICAgJCgnI3dvcmtmbG93LXVybC10ZXh0JykudmFsKHVybCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgJCgnI2dlbmVyYXRlLXVybC1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBnZW5lcmF0ZVdvcmtmbG93VXJsKCk7XG4gICAgfSk7XG4gICAgaWYgKCQoJyN3b3JrZmxvdy11cmwtdGV4dCcpLnZhbCgpID09ICcnKSB7XG4gICAgICAgIGdlbmVyYXRlV29ya2Zsb3dVcmwoKTtcbiAgICB9XG59KTtcbiJdfQ==